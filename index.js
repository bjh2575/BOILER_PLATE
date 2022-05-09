const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junho:qwe123@boilerplate.xmtun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
  // useNewUrlParser: true, useUnifriedTopology: true, useCreateIndes: true, useFindAndModify: false 
}).then(() => console.log('MongoDB Connected...') )
  .catch(err => console.log (err))

  
  

app.get('/', (req, res) => res.send('hello world~~안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/*    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)*/