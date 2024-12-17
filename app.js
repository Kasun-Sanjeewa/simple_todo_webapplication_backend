const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');



app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);



app.post('/addTask', (req, res) => {
    controller.addTask(req.body, (callback) => {
        res.send();
    });
});



app.use(express.json());

module.exports = app;
