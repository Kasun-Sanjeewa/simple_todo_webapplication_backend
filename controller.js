const Tasks = require('./model');
//getTask
const getTask = (req, res, next) => {
    Tasks.find()
        .then(response => {
            res.json({ response })
        })

        .catch(error => {
            res.json({ error })
        })
}

//addTask
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


//updateTask

const updateTask = (req, res, next) => {
    const { _id, task, date, time, catogory, priority } = req.body;

    Tasks.updateMany(
        { _id: _id },
        {
            $set: {
                task: task,
                date: date,
                time: time,
                catogory: catogory,
                priority: priority
            }
        }
    )
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            res.json({ error });
        });
};


//Delete Task
// const deleteTask = (req, res, next) => {
//     const _id = req.body._id;
//     Tasks.deleteOne({ _id: _id })
//         .then(response => {
//             res.json({ response })
//         })

//         .catch(error => {
//             res.json({ error })
//         })
// }


// Delete Task
const deleteTask = (req, res, next) => {
    const _id = req.query._id; // Use `req.query` to access query parameters
    Tasks.deleteOne({ _id: _id })
        .then((response) => {
            res.json({ response });
        })
        .catch((error) => {
            res.json({ error });
        });
};


exports.addTask = addTask;
exports.getTask = getTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
