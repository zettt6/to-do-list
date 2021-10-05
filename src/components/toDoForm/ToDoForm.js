import './ToDoForm.css'

function ToDoForm(props) {
   return (
      <div className="input-btn">
         <form>
            <input
               placeholder="What do you want to do today?"
               type="text"
               value={props.inputText}
               onChange={props.changeInputText}
            />

            <button type="submit" onClick={props.addTask}>
               +
            </button>
         </form>
      </div>
   )
}

export default ToDoForm
