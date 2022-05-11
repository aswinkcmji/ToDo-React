import React,{useState} from 'react'
import './Todo.scss'
import { Icon } from '@iconify/react';
function Todo() {
  const [state,setState] = useState('')
  const [item,setItem] = useState([])
  const handleChange = (e) => {
    const data = e.target.value
    setState(data)
    console.log(state)
  }

  const storeItem = (event) =>{
    event.preventDefault();
    
    if(state===""){
      alert("enter something...")
      
    }
    if(item.includes(state)){
      alert('exist')
    }
    
    else{

      setItem([...item,state])
      setState("")
    
    }
    
    
  }
  const deleteItem = (key) => {

    setItem(item.filter((data,index) => index !== key))

  }
  const editItem = (key) =>{
    const newData = prompt("Enter New ToDo...")
    const newItem = [...item]
    newItem[key] = newData
    setItem(newItem)
    

  }
 
  
  return (
    <div>
      <div className="todo-container">
        
        <form className="todo-input" onSubmit={storeItem}>
          <h1 className='pt-3'>ToDo</h1>
          <input 
            onChange={(e)=>handleChange(e)} 
            className='add-todo mb-3' 
            value={state} type="text" 
            placeholder='ENTER YOUR TODOS...'/>
        </form>
        <div className="todo-list">
          {
          item.length === 0 ? 
            <h1>No ToDo Added</h1>
            :
            <ul className='todo-list-ul'>
            {
              item.map((data,index) => (
                <li key={index}>{data} <i><Icon icon="bxs:pencil" onClick={() => editItem(index)} style={{cursor:"pointer",marginRight:"1rem"}}/><Icon onClick={() => deleteItem(index)} style={{cursor:"pointer"}}  icon="charm:cross" width="20" height="20" /></i></li>
              ))
            }
          </ul>
          }
        </div>
      </div>
    </div>
  )
}

export default Todo