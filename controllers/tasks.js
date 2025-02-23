const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const getSingleTask = (req, res) => {
    res.send({id:req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
}

const updateTask = (req, res) => {
    res.send('update a task')
}

const deleteTask = (req, res) => {
    res.send('delete a task')
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}