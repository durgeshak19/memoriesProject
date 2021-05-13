import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts'

const app = express();
const port = process.env.PORT || 5000;

app.use('/posts',)
// app.use(express.json())
app.use(cors());
app.use(bodyparser.json({limit : "30mb" , extended : true}));
app.use(bodyparser.urlencoded({limit : "30mb" , extended : true}));

// const CONNECTION_URL = "mongodb+srv://durgeshMongodb:durgeshMongodb@cluster0.er8yj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect(CONNECTION_URL,{useNewUrlParser:true , useUnifiedTopology:true})
// .then(()=>{ app.listen(PORT, () =>console.log(`Server Running on port : ${Port}`))})
// .catch((err) =>{console.log('this is the error' + err)})

// mongoose.set('useFindAndModify' , false); 

import MongoClient from 'mongodb'
// const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://durgeshMongodb:durgeshMongodb@cluster0.er8yj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
