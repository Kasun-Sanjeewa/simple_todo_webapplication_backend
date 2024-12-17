const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    task: String,
    date: Date,
    time: String,
    catogory: String,
    priority: String,

});

const Tasks = mongoose.model('Tasks', userSchema);

module.exports = Tasks;