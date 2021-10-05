function Remover(props) {
   return (
      <div className="container-remover">
         <button onClick={props.deleteDoneTasks}>Delete done tasks</button>
         <button onClick={props.deleteAllTasks}>Delete all tasks</button>
      </div>
   )
}

export default Remover
