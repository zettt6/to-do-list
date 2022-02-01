import { useState } from 'react'

import ToDoList from './components/list/ToDoList'
import ToDoForm from './components/form/ToDoForm'
import Filter from './components/filter/Filter'
import Remover from './components/remover/Remover'
import './App.css'

function App() {
   const [inputText, setInputText] = useState('')
   const [tasks, setTasks] = useState([])
   const [filteredTasks, setFilteredTasks] = useState('all')

   const addTask = (e) => {
      e.preventDefault()
      if (inputText === '') {
         return false
      }

      setTasks([
         ...tasks,
         {
            text: inputText,
            completed: false,
         },
      ])
      setInputText('')
   }

   const changeInputText = (e) => {
      setInputText(e.target.value)
   }

   const removeTask = (index) => {
      let tempTasks = [...tasks]
      tempTasks.splice(index, 1)
      setTasks(tempTasks)
   }

   return (
      <div className="todolist-root">
         <div className="ToDoList">
            <div className="todolist-title">
               <h1>Task List</h1>
            </div>
            <div className="todo-container">
               <h3 className="task-counter">Amount of tasks: {tasks.length}</h3>
               <ToDoForm
                  inputText={inputText}
                  addTask={addTask}
                  changeInputText={changeInputText}
               />
               <hr style={{ width: '200px', margin: '15px 0' }} />
               <Filter
                  tasks={tasks}
                  filteredTasks={filteredTasks}
                  setFilteredTasks={setFilteredTasks}
               />
               <ToDoList
                  tasks={tasks}
                  setTasks={setTasks}
                  filteredTasks={filteredTasks}
                  removeTask={removeTask}
               />
               <Remover tasks={tasks} setTasks={setTasks} />
            </div>
         </div>
      </div>
   )
}

export default App
