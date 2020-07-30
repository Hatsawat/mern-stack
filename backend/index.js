const express = require('express');
const mongoose =require('mongoose');
mongoose.connect ('mongodb+srv://hatsawat:hatsawat3729@cluster0.dkcmu.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',{userNewUrlParaser:true,useUnifiedTopology:true});
const cors =require('cors'); 
const app = express();
const port =process.env.PORT | 80;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res)=>{
    res.send('helloword');
})
app.get('/api',require('./routes/index.js'))

app.listen(port,() =>{
    console.log('Server runing http//:localhost');
});