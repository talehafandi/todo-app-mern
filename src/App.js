import './App.css';
import './styles/style.css'
import React, {useEffect, useState} from 'react'
import Input from './components/Input'
import Filters from './components/Filters'
import Task from './components/Task';
import DeletedTask from './components/DeletedTask';
import { useSelector } from 'react-redux';


function App() {  
  const tasks = useSelector(state=>state);
  const [status, setStatus] = useState('all');

  // useEffect(() => {
  //   console.log("tasks: ", tasks);
  // }, [tasks]);
  // console.log('status: ', status);

  return (
    <div className="to-do-list">
      <Input status={status}/>
      <Filters setStatus={setStatus} />
      <ul className="tasks">
        {tasks?.length 
          ? tasks.map(task => {
            // console.log("task: ", task);
            if(task.isDeleted) return (<DeletedTask item={task} status={status} key={task._id}/>)
            return (<Task item={task} status={status} key={task._id}/>)
          }) 
          : <h3 className="empty-header" >There is no task to show</h3>}
      </ul>
    </div>
  )
}

export default App;
