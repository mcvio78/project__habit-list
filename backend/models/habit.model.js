const mongoose = require('mongoose');

const Habit = mongoose.model(
  'Habit',
  new mongoose.Schema(
    {
      habitType: String,
      habitName: String,
      targetType: { type: String, default: '' },
      targetAmount: { type: Number, default: null },
      expirationDate: Date,
      pending: Boolean,
      state: String,
    },
    { timestamps: true },
  ),
);

module.exports = Habit;
