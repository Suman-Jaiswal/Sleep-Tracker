const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const SleepCollection = require('./routes/api/SleepCollection')

require('dotenv').config()

const app = express()
const port =  process.env.PORT || 8000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true , useCreateIndex: true , useUnifiedTopology: true});

const connection = mongoose.connection
connection.once('open', () => {
  console.log('Mongodb database connection established successfully.')
})

app.get('/',  (req, res) => {
     res.send('App is running')
})
// use routes
app.use('/chart', SleepCollection)

app.listen(port, () =>{
   console.log(`Yahoo! Server is running at the port:${port}`)
})