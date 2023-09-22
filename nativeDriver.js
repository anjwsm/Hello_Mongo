const express= require('express');
const server = express();
const mongoose= require('mongoose');
const { Schema } = mongoose;
// mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
const databaseUrl= 'mongodb://127.0.0.1:27017';

const { MongoClient, ServerApiVersion } = require("mongodb");

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(databaseUrl);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    

    //  await client.db('shopDB').collection('products').updateOne({_id:1},{$set:{name:"pencil"}});
    //  await client.db("shopDB").collection('products').insertMany([{name:"palodi" , price: 30},{name:"ladoo" , price: 30}] );
    await client.db("shopDB").collection('products').deleteMany({name:"palodi"})
    const res= await client.db("shopDB").collection('products').find().toArray();

    // Print the result as JSON
    console.log(JSON.stringify(res, null, 2));
  } finally {
    // Ensures that the client will close when you finish/error
   await client.close();
  }
}
run().catch(console.log);



// const fruitSchema = new Schema({
//   name : String ,
//   rating: Number,
//   review: String
// });
// const Fruit = mongoose.model('fruit', fruitSchema);

// const fruit = new Fruit ({
//   name:"Apple",
//   rating:7,
//   review:"Tasty"
// });

// fruit.save().then(()=>{
//   console.log("saved");
// }).catch((e)=>{
//   console.log('Erro in saving',e);
// })







server.listen(3000,()=>{
    console.log('Server running on port 3000')
})

