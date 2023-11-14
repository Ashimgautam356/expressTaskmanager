const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://ashim:ashim12345@taskmanagerproject.zdfcogy.mongodb.net/starter?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=>console.log('connected to the db ....')).catch((err)=>console.log(err))