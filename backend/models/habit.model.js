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
      expirationDate: Number,
      state: String,
      habitOwnerId: String,
    },
    { timestamps: true },
  ),
);

module.exports = Habit;
