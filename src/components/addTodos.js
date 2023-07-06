import React, { useState } from "react";
import EditTaskModal from "./editTaskModal";

const TodoAppLandingPage = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState("");

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") return;
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const handleTaskDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditModalOpen = (index) => {
    setEditModalOpen(true);
    setEditTaskIndex(index);
    setEditTaskValue(tasks[index]);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    setEditTaskIndex(null);
    setEditTaskValue("");
  };

  const handleTaskUpdate = (updatedValue) => {
    setEditTaskValue(updatedValue);
  };

  const handleSaveTask = () => {
    if (editTaskValue.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[editTaskIndex] = editTaskValue;
    setTasks(updatedTasks);
    handleEditModalClose();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow p-6 rounded">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <p className="text-gray-600 mb-6">Manage your tasks efficiently.</p>
        <form className="mb-4" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            className="w-full border border-gray-300 rounded py-2 px-3 mb-2"
            value={taskInput}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </form>
        {tasks.length > 0 ? (
          <ul className="list-disc list-inside">
            {tasks.map((task, index) => (
              <li className="text-gray-800 mb-2" key={index}>
                <span>{task}</span>
                <div className="float-right">
                  <button
                    className="text-blue-500 font-bold mr-2"
                    onClick={() => handleEditModalOpen(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 font-bold"
                    onClick={() => handleTaskDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No tasks added yet.</p>
        )}
      </div>
      <EditTaskModal
        isOpen={editModalOpen}
        taskValue={editTaskValue}
        handleTaskUpdate={handleTaskUpdate}
        handleClose={handleEditModalClose}
        handleSaveTask={handleSaveTask}
      />
    </div>
  );
};

export default TodoAppLandingPage;
