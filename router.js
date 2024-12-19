const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/getTask', controller.getTask);
router.post('/addTask', controller.addTask);
router.put('/updateTask', controller.updateTask);
router.delete('/deleteTask', controller.deleteTask);


module.exports = router;