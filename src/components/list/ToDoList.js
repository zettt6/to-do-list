import './ToDoList.css'
import cross from './delete.svg'

function ToDoList({ tasks, setTasks, filteredTasks, removeTask, ...props }) {
   const changeCheck = (index) => {
      let tempTasks = [...tasks]
      tempTasks[index].completed = !tempTasks[index].completed
      setTasks(tempTasks)
   }

   return (
      <div className="container-ul">
         <ul>
            {tasks
               .filter(
                  (task) =>
                     filteredTasks === '' ||
                     filteredTasks === 'all' ||
                     (!task.completed && filteredTasks === 'todo') ||
                     (task.completed && filteredTasks === 'done')
               )
               .map((task, index) => (
                  <div key={index.toString()}>
                     <div
                        className={
                           task.completed ? 'completed-task tasks' : 'tasks'
                        }
                     >
                        <input
                           type="checkbox"
                           onChange={() => changeCheck(index)}
                           checked={task.completed}
                        />
                        <li>{task.text}</li>

                        <button
                           className="cross-tasks"
                           onClick={() => removeTask(index)}
                        >
                           <img alt="" src={cross} />
                        </button>
                     </div>
                  </div>
               ))}
         </ul>
      </div>
   )
}

export default ToDoList
