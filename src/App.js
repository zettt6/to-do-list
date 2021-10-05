import { useState } from 'react'

import ToDoListComp from './components/toDoListComp/ToDoListComp'
import ToDoForm from './components/toDoForm/ToDoForm'
import Filter from './components/filter/Filter'
import Remover from './components/remover/Remover'
import todoEmpty from './7703606.png'
import './App.css'

// декомпозировать код
// добавить модалку для редактирования таски

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

   const changeCheck = (index) => {
      let tempTasks = [...tasks]
      tempTasks[index].completed = !tempTasks[index].completed
      setTasks(tempTasks)
   }

   const showAllTasks = () => {
      setFilteredTasks('all')
   }

   const showCompletedTasks = () => {
      if (filteredTasks !== 'done') {
         setFilteredTasks('done')
      } else setFilteredTasks('all')
   }

   const showUncompletedTasks = () => {
      if (filteredTasks !== 'todo') {
         setFilteredTasks('todo')
      } else setFilteredTasks('all')
   }

   const deleteDoneTasks = () => {
      console.log('work')
      let tempTasks = [...tasks]
      tempTasks = tempTasks.filter((task) => !task.completed)
      setTasks(tempTasks)
   }

   const deleteAllTasks = () => {
      setTasks([])
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

               <div className="hr">_____________</div>

               {(!!tasks.length && (
                  <Filter
                     filteredTasks={filteredTasks}
                     showCompletedTasks={showCompletedTasks}
                     showUncompletedTasks={showUncompletedTasks}
                     showAllTasks={showAllTasks}
                  />
               )) || (
                  <div className="empty">
                     <img src={todoEmpty} alt="ops" />
                     Task list is empty!
                  </div>
               )}
               <ToDoListComp
                  tasks={tasks}
                  filteredTasks={filteredTasks}
                  removeTask={removeTask}
                  changeCheck={changeCheck}
               />

               {!!tasks.length && (
                  <Remover
                     deleteAllTasks={deleteAllTasks}
                     deleteDoneTasks={deleteDoneTasks}
                  />
               )}
            </div>
         </div>
      </div>
   )
}

export default App
