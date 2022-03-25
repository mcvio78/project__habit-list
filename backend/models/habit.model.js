const mongoose = require('mongoose');

const Habit = mongoose.model(
  'Habit',
  new mongoose.Schema(
    {
      habitType: String,
      habitName: String,
      targetType: { type: String, default: '' },
      targetValue: { type: Number, default: null },
      targetCurrent: { type: Number, default: null },
      targetUnit: { type: String, default: '' },
      selectedDateObj: {
        selectedDateString: String,
        selectedDateISO: String,
        selectedDateTsUTC: Number,
        selectedDateTsTZ: Number,
        timezone: String,
      },
      habitStatus: { type: String, default: 'pending' },
      habitOwnerId: String,
    },
    { timestamps: true },
  ),
);

module.exports = Habit;
