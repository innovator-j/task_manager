const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks')       - update task
// app.delete('/api/v1/tasks')      - delete task

const port = 3000;

app.listen(port, console.log(`Server is running on port ${port}...`) );
