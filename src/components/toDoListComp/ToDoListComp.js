import './ToDoListComp.css'
import cross from './delete.svg'

function ToDoListComp(props) {
   return (
      <div className="container-ul">
         <ul>
            {props.tasks
               .filter(
                  (task) =>
                     props.filteredTasks === '' ||
                     props.filteredTasks === 'all' ||
                     (!task.completed && props.filteredTasks === 'todo') ||
                     (task.completed && props.filteredTasks === 'done')
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
                           onChange={() => props.changeCheck(index)}
                           checked={task.completed}
                        />
                        <li>{task.text}</li>

                        <button
                           className="cross-tasks"
                           onClick={() => props.removeTask(index)}
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

export default ToDoListComp
