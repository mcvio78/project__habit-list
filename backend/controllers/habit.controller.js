const { format, fromUnixTime, addDays, getUnixTime } = require('date-fns');

const db = require('../models');
const Habit = db.habit;
const User = db.user;

exports.createDailyHabit = async (req, res) => {
  try {
    const {
      habitType,
      habitName,
      targetType,
      targetValue,
      targetCurrent,
      targetUnit,
      selectedDateObj,
    } = req.body;

    if (!(habitType && habitName)) {
      return res.status(400).send({ message: 'All input is required.' });
    }

    if (targetType && !targetValue) {
      return res.status(400).send({ message: 'Target amount is required.' });
    }

    if (targetValue && !targetType) {
      return res.status(400).send({ message: 'Target type is required.' });
    }

    if (User.findById(req.user.id)) {
      const habit = new Habit({
        habitType: habitType,
        habitName: habitName,
        targetType: targetType,
        targetValue: targetValue,
        targetCurrent: targetCurrent,
        targetUnit: targetUnit,
        selectedDateObj: selectedDateObj,
        habitOwnerId: req.user.id,
      });

      const createdHabit = await habit.save(habit);

      const date = format(
        fromUnixTime(selectedDateObj.selectedDateUTS),
        'yyyy-MM-dd',
      );
      const dayFolder = await User.findOne({ 'habits.daily': date });
      const dayFolderPath = `habits.daily.${date}`;

      if (!dayFolder) {
        await User.findOneAndUpdate(
          { _id: req.user.id },
          {
            $addToSet: {
              [dayFolderPath]: { habitId: createdHabit._id, status: 'pending' },
            },
          },
        );
      } else {
        await User.findOneAndUpdate(
          { _id: req.user.id },
          {
            $push: {
              [dayFolder]: { habitId: createdHabit._id, status: 'pending' },
            },
          },
        );
      }

      res.statusMessage = 'Habit was created successfully!';
      res.status(201).send(createdHabit);
    } else {
      res.status(404).send({ message: "Failed! User ID doesn't exist." });
    }
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Habit.',
    });
  }
};

exports.getDailyHabits = async (req, res) => {
  const { dateUTC } = req.query;

  try {
    const habits = await Habit.find({
      habitOwnerId: req.user.id,
      $or: [
        {
          'selectedDateObj.selectedDateUTS': {
            $gte: dateUTC,
            $lt: getUnixTime(addDays(fromUnixTime(dateUTC), 1)),
          },
        },
        {
          'selectedDateObj.selectedDateUTS': {
            $lt: dateUTC,
            $gt: getUnixTime(addDays(fromUnixTime(dateUTC), -1)),
          },
        },
      ],
    }).lean();
    res.status(200).send(habits);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while getting daily Habits.',
    });
  }
};

exports.modifyDailyHabit = async (req, res) => {
  const { _id, ...habitModifies } = req.body;
  const { id } = req.user;
  try {
    const habit = await Habit.findOneAndUpdate(
      {
        habitOwnerId: id,
        _id: _id,
      },
      habitModifies,
      {
        returnOriginal: false,
      },
    ).lean();
    res.statusMessage = 'Habit has been updated successfully!';
    res.status(200).send(habit);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while updating daily Habit.',
    });
  }
};

exports.deleteDailyHabit = async (req, res) => {
  const id = req.query.id;
  try {
    await Habit.deleteOne({ _id: id }).lean();
    res.statusMessage = 'Habit has been removed successfully!';
    res.status(204).send();
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while deleting daily Habit.',
    });
  }
};
