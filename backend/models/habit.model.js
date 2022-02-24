const mongoose = require('mongoose');

const Habit = mongoose.model(
  'Habit',
  new mongoose.Schema(
    {
      habitType: String,
      habitName: String,
      targetType: { type: String, default: '' },
      targetValue: { type: Number, default: null },
      targetCurrent: Number,
      targetUnit: String,
      expirationDate: Number,
      status: String,
      habitOwnerId: String,
    },
    { timestamps: true },
  ),
);

module.exports = Habit;
