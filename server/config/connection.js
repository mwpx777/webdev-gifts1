 const mongoose = require('mongoose');
console.log( "this is " + process.env.MONGODB_URI);
 mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/webdevgifts',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true,
     useFindAndModify: false
 }). catch(error => console.log(error));

 module.exports = mongoose.connection;