import React, { useState, useRef, useEffect } from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { MdRecycling } from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import {
  archiveTask,
  statusToogle,
  updateTask,
  getAllTasks,
} from "../redux/actions/actions";
// import { uuid } from "uuidv4";

const Tasks = ({ test, status }) => {
  // const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [tasksState, setTasksState] = useState({})
  const [task, setTask] = useState(test);

  // return tasks.map((el, index) => {
  // const task = tasksState[index]
  // console.log("task: ", task);
  // console.log("test: ", test);
  useEffect(() => {
    // console.log('re-rendered');
    setTask({ ...test });
  }, [test]);

  // console.log('status: ', status);

  return (
    <div
      className={`tasks-container ${task?.status === "done" ? "done" : ""}`}
      key={task?.id}
    >
      <input
        className="task"
        value={task?.name}
        onChange={(e) => {
          if (task.isDeleted) return;
          setTask((prev) => ({ ...prev, name: e.target.value }));
        }}
        onBlur={() => {
          if (task.isDeleted) return;
          dispatch(updateTask(task, status));
        }}
      />
      <div className="task-buttons">
        {!task.isDeleted ? (
          <>
            <p className="task-delete" onClick={(e) => dispatch(archiveTask(task._id, status))} >
              <CgTrashEmpty />
            </p>
            <p className="task-delete" onClick={(e) => dispatch(statusToogle(task, status))} >
              <AiOutlineCheck />
            </p>
          </>
        ) : (
          <>
            <p className="task-delete" onClick={(e) => dispatch(archiveTask(task._id, status))} >
              <CgTrashEmpty />
            </p>
            <p className="task-delete" onClick={(e) => dispatch(archiveTask(task._id, status))} >
              <MdRecycling />
            </p>
          </>
        )}
      </div>
    </div>
  );
  // });
};

export default Tasks;
