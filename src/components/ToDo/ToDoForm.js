import { React } from "react";
import "../Styles/StyleToDo.css";

function ToDoForm(p) {
  function TextInputHandler(event) {
    p.setFormInputData(event.target.value);
  }
  function SubmitTodoHandler() {
    p.setTodo([
      ...p.todo,
      { text: p.formInputData, complete: false, id: Math.random() * 1000 },
    ]);
    p.setFormInputData("");
  }
  return (
    <>
      <form className="todoWrapper">
        <input
          value={p.formInputData}
          onChange={TextInputHandler}
          type="text"
          className="TextInput"
        />
        <button
          type="button"
          onClick={SubmitTodoHandler}
          className="SubmitButton"
        >
          CLICK ME
        </button>
      </form>
    </>
  );
}

export default ToDoForm;