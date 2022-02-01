import todoEmpty from './7703606.png'

function Filter({ filteredTasks, setFilteredTasks, ...props }) {
   if (!props.tasks.length)
      return (
         <div className="empty">
            <img src={todoEmpty} alt="ops" />
            Task list is empty!
         </div>
      )

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

   return (
      <div className="container-filter">
         <button
            className={
               filteredTasks === 'all' ? 'filter-all-active' : 'filter-btn'
            }
            onClick={showAllTasks}
         >
            All
         </button>
         <button
            className={
               filteredTasks === 'done' ? 'filter-done-active' : 'filter-btn'
            }
            onClick={showCompletedTasks}
         >
            Done
         </button>
         <button
            className={
               filteredTasks === 'todo' ? 'filter-todo-active' : 'filter-btn'
            }
            onClick={showUncompletedTasks}
         >
            Todo
         </button>
      </div>
   )
}
export default Filter
