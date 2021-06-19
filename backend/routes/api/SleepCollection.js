const router = require('express').Router()
const Sleep = require('../../models/sleep.model')

router.route('/').get((req, res) => {
  Sleep.find()
  .then(collection => res.json(collection) )
  .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
  const newSleep = new Sleep({
    date: req.body.date,
    sleepTime: req.body.sleepTime,
    sleepMeridiem: req.body.sleepMeridiem,
    wakeupTime: req.body.wakeupTime,
    wakeupMeridiem: req.body.wakeupMeridiem,
  })
  newSleep.save()
  .then((sleep) => res.json(sleep) )
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;