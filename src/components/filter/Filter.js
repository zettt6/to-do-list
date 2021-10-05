function Filter(props) {
   return (
      <div className="container-filter">
         <button
            className={
               props.filteredTasks === 'all'
                  ? 'filter-all-active'
                  : 'filter-btn'
            }
            onClick={props.showAllTasks}
         >
            All
         </button>
         <button
            className={
               props.filteredTasks === 'done'
                  ? 'filter-done-active'
                  : 'filter-btn'
            }
            onClick={props.showCompletedTasks}
         >
            Done
         </button>
         <button
            className={
               props.filteredTasks === 'todo'
                  ? 'filter-todo-active'
                  : 'filter-btn'
            }
            onClick={props.showUncompletedTasks}
         >
            Todo
         </button>
      </div>
   )
}
export default Filter
