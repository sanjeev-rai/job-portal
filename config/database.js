const mongoose = require('mongoose');
// console.log(process.env.DATABASE);
// const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DBPASSWORD);
const connectDatabase = () => {
    mongoose.connect('mongodb+srv://sanjoo:sanjoo@cluster0-ztllt.mongodb.net/job-portal?retryWrites=true&w=majority', {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useCreateIndex : true
    }).then(con => {
        console.log(`database connected to host ${con.connection.host}`);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = connectDatabase