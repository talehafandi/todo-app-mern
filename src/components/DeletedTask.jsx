import React, { useState, useEffect } from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { AiOutlineCheck } from "react-icons/ai";
import { MdRecycling } from 'react-icons/md'
import { useDispatch } from "react-redux";
import { restoreTask, deleteTask} from "../redux/actions/actions";


const DeletedTask = ({ item, status }) => {
  const dispatch = useDispatch();
  // const [task, setTask] = useState(item);

  // useEffect(() => {
  //   setTask({ ...item });
  // }, [item]);

  // console.log('status: ', status);

  return (
    <div
      className={`tasks-container ${item?.status === "done" ? "done" : ""}`}
      key={item?.id}
    >
      <input className="task" value={item?.name}  readOnly={true}/>
      <div className="task-buttons">
        <span className="task-delete" onClick={() => dispatch(deleteTask(item._id))} >
          <CgTrashEmpty />
        </span>
        <span className="task-delete" onClick={() => dispatch(restoreTask(item._id))} >
          <MdRecycling />
        </span>
      </div>
    </div>
  );
};

export default DeletedTask;
