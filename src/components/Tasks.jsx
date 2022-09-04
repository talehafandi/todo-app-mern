import React, { useState, useEffect } from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { MdRecycling } from 'react-icons/md'
import { useDispatch } from "react-redux";
import { archiveTask, statusToogle, updateTask,} from "../redux/actions/actions";


const Tasks = ({ item, status }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(item);

  useEffect(() => {
    setTask({ ...item });
  }, [item]);

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
          if (task?.isDeleted) return;
          setTask((prev) => ({ ...prev, name: e.target.value }));
        }}
        onBlur={() => {
          if (task?.isDeleted) return;
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
};

export default Tasks;
