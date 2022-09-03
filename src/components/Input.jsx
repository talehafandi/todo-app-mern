import React, {useState} from 'react'
import Image from '../assets/bars-icon.svg'
import { v4 as uuid } from 'uuid';
import { validate } from '../validation';
import { useSelector, useDispatch } from 'react-redux';
import { add, getAllTasks } from '../redux/actions/actions';


const Input = () => {

    const dispatch = useDispatch();
    // const tasks = useSelector(state=>state);
    // console.log(tasks);

    const [inputValue, setInputValue] = useState("");
    
    function onSubmit(e) {
        e.preventDefault();
        
        const obj={
            name: inputValue,
            id: uuid(),
            status: 'pending'
        }
  
        validate(inputValue) ? dispatch(add(obj)) : alert("Can not enter empty string");
        setInputValue("");
    }

    React.useEffect(() => {
      dispatch(getAllTasks())
    }, []) 

  return (
    <form className="task-input-container" onSubmit={onSubmit}>
        <img src={Image} alt="bars-icon" id="bars-icon"/>
        <input 
                onChange={(e)=>setInputValue(e.target.value)} 
                value={inputValue} 
                type="text" 
                id="task-input" 
                name="task" 
                placeholder="New task"/>
    </form>
  )
}

export default Input