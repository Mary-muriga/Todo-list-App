import React, { useEffect, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <div>
            <input
              type="text"
              placeholder="Update your list"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
            />
            <button className="todo-button">Update</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
            />
            <button className="todo-button">Add todo</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
