const Tasks = require('./model');

const addTask = (req, res, next) => {
    const user = new Tasks({
        task: req.body.task,
        date: req.body.date,
        time: req.body.time,
        catogory: req.body.catogory,
        priority: req.body.priority,
    });

    user.save()
        .then(response => {
            res.json({ response })
        })

        .catch(error => {
            res.json({ error })
        })
}


exports.addTask = addTask;
