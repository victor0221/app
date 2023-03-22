import { React, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Notify from "../Notify";
import "../Styles/StyleToDo.css";

function ToDoPage() {
  const [formInputData, setFormInputData] = useState("");
  const [todo, setTodo] = useState([]);
  const [showNotify, setShowNotify] = useState(false);

  return (
    <>
      <div className="todoWrapper">
        <ToDoForm
          formInputData={formInputData}
          todo={todo}
          setTodo={setTodo}
          setFormInputData={setFormInputData}
        />
      </div>
      <div className="todoWrapper">
        <ToDoList
          showNotify={showNotify}
          setShowNotify={setShowNotify}
          todo={todo}
          setTodo={setTodo}
        />
        {showNotify && <Notify type="--" message="Action Completed" />}
      </div>
    </>
  );
}

export default ToDoPage;
