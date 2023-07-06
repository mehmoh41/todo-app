import React from "react";

const EditTaskModal = ({
  isOpen,
  taskValue,
  handleTaskUpdate,
  handleSaveTask,
  handleClose,
}) => {
  const handleInputChange = (e) => {
    handleTaskUpdate(e.target.value);
  };

  const handleSave = () => {
    handleSaveTask();
    handleClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute bg-green-200 shadow-lg rounded p-4 w-80">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <input
          type="text"
          value={taskValue}
          className="w-full border border-gray-300 rounded py-2 px-3 mb-4"
          onChange={handleInputChange}
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
