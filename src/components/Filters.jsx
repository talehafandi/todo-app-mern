import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAll,
  getArchived,
  getAllTasks,
  getByStatus,
} from "../redux/actions/actions";

const Filters = ({setStatus}) => {
  const tasks = useSelector((state) => state);
  const [activeElement, setActiveElement] = React.useState();
  const filtersRef = React.useRef();
  const dispatch = useDispatch();
  let filterLinks = filtersRef?.current?.children
    ? [...filtersRef?.current?.children]
    : null;

  const onClickHandler = (e, callback, type) => {
    setActiveElement(e.target);
    setStatus(type);
    // type ? dispatch(callback(type)) : dispatch(callback())
    dispatch(callback(type));
  };
  
  React.useEffect(() => {
    filterLinks?.map((link) => link.classList.remove("active"));
    activeElement?.classList.add("active");
  }, [activeElement]);

  return (
    <div className="task-filter">
      <div className="task-filter-options" ref={filtersRef}>
        <h4
          className="active"
          onClick={(e) => onClickHandler(e, getAllTasks, "all")}
        >
          All
        </h4>
        <h4 onClick={(e) => onClickHandler(e, getByStatus, "pending")}>
          Pending
        </h4>
        <h4 onClick={(e) => onClickHandler(e, getByStatus, "done")}>Done</h4>
        <h4 onClick={(e) => onClickHandler(e, getArchived, "deleted")}>
          Deleted
        </h4>
      </div>
      <button
        type="submit"
        className="clear"
        onClick={() => dispatch(clearAll())}
      >
        Clear All
      </button>
    </div>
  );
};

export default Filters;
