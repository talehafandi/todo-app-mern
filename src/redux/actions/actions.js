import * as requests from '../../api/requests'


// LOAD ALL TASKS
export const getAllTasks = (_, status) => {
  return async (dispatch) => {
    try {
      const options = { isDeleted: false };
      if (status === "deleted") options.isDeleted = true;
      if (status === "done" || status === "pending") options.status = status;
      console.log("options: ", status);
      const res = await requests.getAllTasks()
      dispatch({ type: 'GET_TASKS', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }
}

// CLEAR ALL
export const clearAll = () => {
  return async (dispatch) => {
    try {
      const res = await requests.clearAll()
      dispatch({ type: 'CLEAR', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }
}

// ADD A TASK
export const add = (obj) => {
  return async (dispatch) => {
    try {
      const res = await requests.addTask(obj)
      dispatch({ type: 'ADD', payload: res.data.tasks })
    } catch (error) {
      console.log(error.catch);
    }
  }
}

// ARCHIVE A TASK

export const archiveTask = (id, status) => {
  return async (dispatch) => {
    try {
      const options = {isDeleted: false}
      if(status === 'deleted') options.isDeleted = true
      if (status === "done" || status === "pending") options.status = status;
      console.log("options: ", options);
      const res = await requests.archiveTask(id, options)
      
      dispatch({ type: 'ARCHIVE', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }
}

// DELETE A TASK

export const deleteTask = (id, status) => {
  return async (dispatch) => {
    try {
      const options = {isDeleted: false}
      if(status === 'deleted') options.isDeleted = true
      if (status === "done" || status === "pending") options.status = status;
      const res = await requests.archiveTask(id, options)
      
      dispatch({ type: 'ARCHIVE', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }
} 


//UPDATE A TASK

export const updateTask = (data, filter) => {

  return async (dispatch) => {
    try {
      filter.isDeleted = false
      const res = await requests.updateTask(data._id, { data, filter })

      dispatch({ type: 'UPDATE', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }

}


// CHANGE STATUS OF A TASK
export function statusToogle(data, status) {

  return async (dispatch) => {
    try {
      
      if (data.status === 'done') data.status = 'pending'
      else data.status = 'done'

      const options = {isDeleted: false}
      if(status === 'pending' || status === 'done') options.status = status
      
      const body = {data, options}
      const res = await requests.updateTask(data._id, body)

      dispatch({ type: "CHECK", payload: res.data.tasks })
    } catch (error) {
      console.log("error response: ", error.response);
    }
  }

}

export const getArchived = () => {
  return async (dispatch) => {
    try {
      const res = await requests.getArchived()
      // console.log(res.data);
      dispatch({ type: 'GET_ARCHIVED', payload: res.data.archived })
    } catch (error) {
      console.log(error.response);
    }
  }
}

export const getByStatus = (status) => {
  return async (dispatch) => {
    try {
      const res = await requests.getByStatus(status)
      dispatch({ type: 'GET_BY_STATUS', payload: res.data.tasks })
    } catch (error) {
      console.log(error.response);
    }
  }
}
