const mongoDB = require('mongodb');
const MongoClient = mongoDB.MongoClient

const url = 'mongodb://27.0.0.1:27017'
const databaseName = 'task-manager';

MongoClient.connect(url,{useNewUrlParser:true},(error, client)=>{
if(error){
    return console.log('Error');
}
const db = client.db(databaseName);
db.collection('users').insertMany({
    name:'many',
    address:{
        no:123,
        street:'cuddalore main road',
        location:'mudaliarpet'
    }
},(error,result)=>{
if(error){
    return console.log('unable to insert');
}
console.log(result.ops)

})
})