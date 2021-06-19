const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sleepSchema = new Schema({
  date: { type: Date, default: Date.now },
  sleepTime: { type: Number, default: (new Date()).getTime() },
  sleepMeridiem: { type: String, default: 'PM' },
  wakeupTime: { type: Number, default: (new Date()).getTime() },
  wakeupMeridiem: { type: String, default: 'AM' },
},
)

module.exports = Sleep = mongoose.model('Sleep', sleepSchema);