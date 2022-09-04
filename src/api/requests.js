import axios from './axios'

const getAllTasks = () => axios.get(),
      getArchived = () => axios.get('/archived'),
      getByStatus = (status) => axios.get(`/${status}`),
      addTask = (body) => axios.post('/add', body),
      archiveTask = (id) => axios.patch(`/archive/${id}`),
      restoreTask = (id) => axios.patch(`/restore/${id}`),
      deleteTask = (id) => axios.delete(`/delete/${id}`),
      updateTask = (id, body) => axios.patch(`/update/${id}`, body),
    //   updateStatus = (id, body) => axios.patch(`/update/${id}`, body),
      clearAll = () => axios.delete('clear-all')

export {
    getAllTasks,
    getArchived,
    getByStatus,
    addTask,
    archiveTask,
    restoreTask,
    deleteTask,
    updateTask,
    // updateStatus,
    clearAll
}