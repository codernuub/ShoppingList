const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();




//Bodyaparser Middleware 
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Header","Origin,X-requested-with,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,DELETE");
    next();

})

app.get('/',(req,res)=>{
    res.send("Working")
})
//db config
const db = ('mongodb://127.0.0.1:27017/shoppingList')

//connect to mongo

mongoose.connect(db,{useNewUrlParser:true});

mongoose.connection.once('open',function(){
    console.log(`connection has been made `);
}).on('error',function(err){
    console.log('connection errr',err);
})



/*mongoose.connect(db,{useNewUrlParser:true})
    .then(() => console.log("Mongod connected"))
    .catch(err => console.log(err));*/

// use Routes
app.use('/api/items', items);

const port = 5000;
 
app.listen(port, () => console.log(`server started at port  ${port}`)); 