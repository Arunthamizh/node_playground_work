//  CURD operation

// const mongodb = require('mongodb'); //driver native  
// // used to connect to database
// const MongoClient = mongodb.MongoClient

// object destructuring 
const {MongoClient, ObjectID } = require('mongodb');

// Connection URL
const connectionURL = 'mongodb://127.0.0.1:27017';
// Database Name
const databaseName = 'task-manager';
// // Create a new MongoClient
// const client = new MongoClient(connectionURL);

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp())
MongoClient.connect(connectionURL, { useNewUrlParser: true , useUnifiedTopology: true }, (error, client)=>{
    if(error){
       return console.log('unable to connect DB')
    }
    // console.log('connected success')
    // create DB
 const db =   client.db(databaseName);
   // db.collection('users').insertOne({
   //    name: 'Arunthamizhid',
   //    age: 27
   // }, (error, result) => {
   //    if (error) {
   //       return console.log('unable to insert');
   //    }
   //    console.log(result.ops)
   // })

   // db.collection('users').findOne({
   //    // _id : new ObjectID('60095325b561d6439dd838fe')
   //    age: 29
   // },(error, user)=>{
   //    if(error){
   //       return console.log('Not able to find the user');
   //    }
   //    console.log(user);
   // })

   // find method have a callback in cursor
   // db.collection('users').find({ age:27}).toArray((error, users)=>{
   //    if(error){
   //       return console.log('Users with age 27 not found');
   //    }
   //    console.log(users);
   // })


   // db.collection('tasks').updateMany({
   //    completed: false
   // },{
   //    $set:{
   //       completed: true
   //    },
   //    $mul:{
   //       age:1
   //    },
   // }).then((resolve)=>{
   //    console.log("updated successfully",resolve)
   // }).then((err)=>{
   //    console.log('Not able to updated the name',err)
   // })

   db.collection('users').deleteOne({
      name: 'Arunthamizhids'
   }).then((resolve)=>{
      console.log("updated successfully",resolve)
   }).then((err)=>{
      console.log('Not able to updated the name',err)
   })
   })