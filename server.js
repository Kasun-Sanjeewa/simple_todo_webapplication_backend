const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;
const host = 'localhost';
const router = require('./router');

app.use(cors());
app.use(express.json()); //For convert json format

const uri = 'uri';


const connection = async () => {
    try {

        await mongoose.connect(uri);
        console.log('Connected To MongoDB');
    } catch (error) {

        console.log('MongoDB Error', error);

    }
}

connection();




const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});


app.use('/api', router);





