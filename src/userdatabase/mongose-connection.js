const mongoose = require('mongoose')
const users_collection1 = require('./userdata')

mongoose.connect('mongodb+srv://shivamgupta62851:usha89007@cluster1.jua8jqz.mongodb.net/urdata')
.then(()=>{console.log('mongo connection succesfully')})
.catch((err)=>{console.log(err)})