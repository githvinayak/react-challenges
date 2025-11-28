import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const DragNDrop = () => {
  const TODO = "todo";
  const DOING = "doing";
  const DONE = "done";
  const [value, setValue] = useState();
  const [task, setTask] = useState([]);
  const [dragTask, setDragTask] = useState([]);
  const [updateItem, setUpdateItem] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (updateItem) {
        const obj = {
          title: value,
          id: updateItem.id,
          status: updateItem.status,
        };
        console.log(obj);

        const copyTask = [...task];
        console.log(copyTask);

        const filterList = copyTask.filter((item) => item.id != updateItem.id);
        console.log(filterList);

        setTask((prev) => [...filterList, obj]);
        setUpdateItem(null);
      } else {
        const obj = {
          title: value,
          status: TODO,
          id: Date.now(),
        }; //key pressed
        setTask((prev) => [...prev, obj]);
      }
      setValue("");
    }
  };
  console.log(task);

  const handleDrag = (e, task) => {
    setDragTask(task);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    console.log("dropping:" + status);
    if (status === TODO) {
      handleDragNDrop(TODO);
    } else if (status === DOING) {
      handleDragNDrop(DOING);
    } else if (status === DONE) {
      handleDragNDrop(DONE);
    }
  };
  const handleDragNDrop = (status) => {
    let copyTask = [...task];
    copyTask.map((item, i) => {
      if (item.id === dragTask.id) {
        item.status = status;
      }
      return item;
    });
    setTask(copyTask);
    setDragTask(null);
  };
  const handleDelete = (item) => {
    let copyTask = [...task];
    copyTask = copyTask.filter((task) => task.id !== item.id);
    setTask(copyTask);
  };
  const handleUpdate = (task) => {
    setValue(task.title);
    setUpdateItem(task);
  };
  console.log(updateItem);
  console.log(task);

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-start items-center gap-4 pt-14 px-4'>
        <h1 className=' text-2xl font-bold'>Task Manager</h1>
        <input
          className='border-2 border-gray-500'
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type='text'
        />
        <div className=' center w-full gap-4'>
          <div
            data-status={TODO}
            onDrop={handleOnDrop}
            onDragOver={onDragOver}
            className=' flex-1 w-[33%] h-[400px] flex flex-col gap-3'
          >
            <h1 className=' w-full px-5 py-2 bg-pink-300 text-lg font-bold rounded-md '>
              Todo
            </h1>
            {task.length > 0 &&
              task.map(
                (task, idx) =>
                  task.status === TODO && (
                    <div
                      key={task.id}
                      draggable
                      onDrag={(e) => handleDrag(e, task)}
                      className='flex justify-between items-center bg-gray-100 gap-2 w-full px-3 py-2'
                    >
                      <p>{task.title}</p>
                      <div className='center gap-2'>
                        <span
                          onClick={() => handleUpdate(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1 '
                        >
                          <MdEdit className='rounded-full h-7 w-7' />
                        </span>
                        <span
                          onClick={() => handleDelete(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1'
                        >
                          <MdDelete className='rounded-full h-7 w-7' />
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
          <div
            onDrop={handleOnDrop}
            onDragOver={onDragOver}
            className=' flex-1 w-[33%] h-[400px]'
            data-status={DOING}
          >
            <h1 className=' w-full px-5 py-2 bg-purple-300 text-lg font-bold rounded-md'>
              Doing
            </h1>
            {task.length > 0 &&
              task.map(
                (task, idx) =>
                  task.status === DOING && (
                    <div
                      key={task.id}
                      onDrag={(e) => handleDrag(e, task)}
                      draggable
                      className='flex justify-between items-center bg-gray-100 gap-2 w-full px-3 py-2'
                    >
                      <p>{task.title}</p>
                      <div className='center gap-2'>
                        <span
                          onClick={() => handleUpdate(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1 '
                        >
                          <MdEdit className='rounded-full h-7 w-7' />
                        </span>
                        <span
                          onClick={() => handleDelete(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1'
                        >
                          <MdDelete className='rounded-full h-7 w-7' />
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
          <div
            data-status={DONE}
            onDrop={handleOnDrop}
            onDragOver={onDragOver}
            className='flex-1 w-[33%]  h-[400px]'
          >
            <h1 className=' w-full px-5 py-2 bg-blue-300 text-lg font-bold rounded-md'>
              Done
            </h1>
            {task.length > 0 &&
              task.map(
                (task, idx) =>
                  task.status === DONE && (
                    <div
                      key={task.id}
                      onDrag={(e) => handleDrag(e, task)}
                      draggable
                      className='flex justify-between items-center bg-gray-100 gap-2 w-full px-3 py-2'
                    >
                      <p>{task.title}</p>
                      <div className='center gap-2'>
                        <span
                          onClick={() => handleUpdate(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1 '
                        >
                          <MdEdit className='rounded-full h-7 w-7' />
                        </span>
                        <span
                          onClick={() => handleDelete(task)}
                          className='hover:bg-red-300 hover:rounded-full p-1'
                        >
                          <MdDelete className='rounded-full h-7 w-7' />
                        </span>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DragNDrop;
