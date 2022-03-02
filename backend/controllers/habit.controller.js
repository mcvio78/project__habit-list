const db = require('../models');
const Habit = db.habit;
const User = db.user;
const { format } = require('date-fns');

exports.createDailyHabit = async (req, res) => {
  try {
    const {
      habitType,
      habitName,
      targetType,
      targetValue,
      targetCurrent,
      targetUnit,
      expirationDate,
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
        expirationDate: expirationDate,
        habitOwnerId: req.user.id,
      });

      const createdHabit = await habit.save(habit);

      const date = format(new Date(expirationDate), 'yyyy-MM-dd');
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
  try {
    const habits = await Habit.find({
      habitOwnerId: req.user.id,
      expirationDate: req.query.day,
    }).lean();
    res.status(200).send(habits);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while getting daily Habits.',
    });
  }
};
