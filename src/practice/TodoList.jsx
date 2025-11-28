import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.value);
    setTask(e.target.value);
  };
  const handleAdd = () => {
    const obj = {
      id: Date.now(),
      task: task,
      isDone: false,
    };
    setTodo([...todo, obj]);
    setTask("");
  };
  const handleRemove = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleDone = (id) => {
    const copy = [...todo];
    const newCopy = copy.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodo(newCopy);
  };
  return (
    <>
      <main>
        <h1>Todo List</h1>
        <div>
          <input
            type='text'
            placeholder='Enter a task'
            className=' border-2 border-black rounded-lg px-4 py-2'
            value={task}
            onChange={handleInput}
          />
          <button
            className=' p-4 w-16 rounded-xl text-white bg-black'
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {todo.map((item) => (
              <li key={item.id} className='flex gap-2'>
                <button
                  onClick={() => handleDone(item.id)}
                  className='w-fit p-1 rounded-xl text-white bg-black'
                >
                  Done
                </button>
                <p
                  className={` ${
                    item.isDone
                      ? " line-through text-md text-black"
                      : " text-md text-black"
                  }`}
                >
                  {item.task}
                </p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className='w-fit p-1 rounded-xl text-white bg-black'
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default TodoList;
