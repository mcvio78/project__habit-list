const db = require('../models');
const Habit = db.habit;

exports.create = async (req, res) => {
  try {
    const { habitType, habitName, targetType, targetAmount, expirationDate } =
      req.body;

    if (!(habitType && habitName && expirationDate)) {
      return res.status(400).send({ message: 'All input is required.' });
    }

    if (targetType && !targetAmount) {
      return res.status(400).send({ message: 'Target amount is required.' });
    }

    if (targetAmount && !targetType) {
      return res.status(400).send({ message: 'Target type is required.' });
    }

    const habit = new Habit({
      habitType: habitType,
      habitName: habitName,
      targetType: targetType,
      targetAmount: targetAmount,
      expirationDate: expirationDate,
    });

    const data = await habit.save(habit);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the Habit.',
    });
  }
};
