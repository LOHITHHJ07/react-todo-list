import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [save, setSave] = useState(true);
  const [des, setDes] = useState("");

  const addTodo = () => {
    const time = Math.floor(Date.now());
    setTodo([...todo, { id: time, description: "", edit: true }]);
  };
  const deleteTodo = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const editTodo = (id: number) => {
    setSave(!save);
    setTodo([
      ...todo.map((item) =>
        item.id === id ? { ...item, edit: !item.edit } : item,
      ),
    ]);
  };
  const updateTodo = (id: number, value: string) => {
    setTodo(
      todo.map((item) =>
        item.id === id ? { ...item, description: value } : item,
      ),
    );
  };
  console.log(todo);
  return (
    <div>
      <h1>Todo list</h1>
      <h2>Make a todo list</h2>
      {todo.length ? (
        <div>
          {todo.map((item) => (
            <div key={item?.id}>
              <input
                type="text"
                disabled={!item?.edit}
                onChange={(e) => updateTodo(item?.id, e.target.value)}
              />
              <button onClick={() => editTodo(item?.id)}>
                {item?.edit ? "save" : "update"}
              </button>
              <button onClick={() => deleteTodo(item?.id)}>delete</button>
              <button onClick={addTodo}>add</button>
            </div>
          ))}{" "}
        </div>
      ) : (
        <button onClick={addTodo}>make a todo list</button>
      )}
    </div>
  );
};

export default Todo;
