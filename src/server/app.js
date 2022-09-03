const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose');
const taskController = require('./controller/tasksController')

dotenv.config('../../config.env')
const app = express()
// const tasks = JSON.parse(fs.readFileSync(`${__dirname}/db.json`))


app.use(express.json())
app.use(cors())


const PORT = 5003
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASS)
// console.log("DB: ", process.env.TEST);
mongoose.connect(DB, (err) => {
    if(err) return console.log(err);

    app.listen(PORT, () => console.log("Server is running on PORT: ", PORT))
})



app.get('/api/v1/tasks', taskController.getAllTasks)
app.get('/api/v1/tasks/archived', taskController.getArchived)
app.get('/api/v1/tasks/:status', taskController.getPendings)
app.post('/api/v1/tasks/add', taskController.addTask)
app.delete('/api/v1/tasks/archive/:id', taskController.archiveTask)
app.patch('/api/v1/tasks/update/:id', taskController.updateTask)
app.delete('/api/v1/tasks/clear-all',taskController.deleteAll)




