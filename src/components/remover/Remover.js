function Remover({ tasks, setTasks, ...props }) {
   if (!tasks.length) return null

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
      <div className="container-remover">
         <button onClick={deleteDoneTasks}>Delete done tasks</button>
         <button onClick={deleteAllTasks}>Delete all tasks</button>
      </div>
   )
}

export default Remover
