import React from "react";
import "../Styles/StyleToDo.css";

function ToDo(props) {
  function deleteHandler() {
    props.setTodo(props.todo.filter((el) => el.id !== props.todoItem.id));
  }

  function completeHandler() {
    props.setTodo(
      props.todo.map((x) => {
        if (x.id === props.todoItem.id) {
          return {
            ...x,
            complete: !x.complete,
          };
        }
        return x;
      })
    );
  }

  const handleClick = () => {
    props.setShowNotify(true);
    setTimeout(() => {
      props.setShowNotify(false);
    }, 3000);
  };

  // add a CSS class based on whether the todo is complete or not
  const todoClass = props.todoItem.complete ? "todo-item completed" : "todo-item";

  return (
    <div className={todoClass}>
      <li className="todo-item-text">{props.text}</li>
      <div className="todo-buttons-container" onClick={handleClick}>
        <button className="todo-button complete-button" onClick={completeHandler} type="button">
          Mark/Unmark
        </button>
        <button className="todo-button delete-button" onClick={deleteHandler} type="button">
          Remove
        </button>
      </div>
    </div>
  );
}

export default ToDo;
