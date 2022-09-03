import './App.css';
import './styles/style.css'
import React, {useEffect, useState} from 'react'
import Input from './components/Input'
import Filters from './components/Filters'
import Tasks from './components/Tasks'
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
      <Input />
      <Filters setStatus={setStatus} />
      <ul className="tasks">
        {tasks?.length 
          ? tasks.map(task => {
            // console.log("task: ", task);
            return (<Tasks test={task} status={status}/>)
          }) 
          : <h3 className="empty-header" >There is no task to show</h3>}
      </ul>
    </div>
  )
}

export default App;
