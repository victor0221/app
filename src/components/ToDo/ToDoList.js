import ToDo from "./ToDo";
import "../Styles/StyleToDo.css";

function ToDoList(p) {
  return (
    <>
      <div className="todoWrapper">
        <ul className="List">
          {p.todo.map((todo) => (
            <ToDo
              todo={p.todo}
              setTodo={p.setTodo}
              key={todo.id}
              todoItem={todo}
              text={todo.text}
              showNotify={p.showNotify}
              setShowNotify={p.setShowNotify}
              className="ListItem"
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
