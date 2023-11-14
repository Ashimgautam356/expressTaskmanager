require('./db/connect')
const express = require('express')
const app  = express()
const tasks = require('./routes/tasks')


// middleware
app.use(express.json())

// routes
app.get('/',(req, res)=>{
    res.status(200).send("task manager")
})

app.use('/api/v1/tasks',tasks)




app.listen(5000,()=>{
    console.log("listining.............")
})