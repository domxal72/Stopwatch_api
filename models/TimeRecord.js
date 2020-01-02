const mongoose = require('mongoose');

const TimeRecordSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'records'
  // },
  totalTime: {
    type: Number,
    required: true
  },
  rounds: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('time Record', TimeRecordSchema);
