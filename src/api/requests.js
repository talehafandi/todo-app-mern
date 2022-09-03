import axios from './axios'

const getAllTasks = () => axios.get(),
      getArchived = () => axios.get('/archived'),
      getByStatus = (status) => axios.get(`/${status}`),
      addTask = (body) => axios.post('/add', body),
      archiveTask = (id, options) => axios.delete(`/archive/${id}`, options),
      deleteTask = (id, options) => axios.delete(`/delete/${id}`, options),
      updateTask = (id, body) => axios.patch(`/update/${id}`, body),
    //   updateStatus = (id, body) => axios.patch(`/update/${id}`, body),
      clearAll = () => axios.delete('clear-all')

export {
    getAllTasks,
    getArchived,
    getByStatus,
    addTask,
    archiveTask,
    deleteTask,
    updateTask,
    // updateStatus,
    clearAll
}