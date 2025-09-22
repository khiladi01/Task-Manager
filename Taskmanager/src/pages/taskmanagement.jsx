import { useState } from "react";

function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add or update task
  const handleAddTask = () => {
    if (!taskText) return;
    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex].text = taskText;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, { text: taskText, file: null }]);
    }
    setTaskText("");
  };

  // Delete task
  const handleDeleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // Edit task
  const handleEditTask = (index) => {
    setTaskText(tasks[index].text);
    setEditIndex(index);
  };

  // Upload file
  const handleFileUpload = (e, index) => {
    const updated = [...tasks];
    updated[index].file = e.target.files[0].name; // simple, just save filename
    setTasks(updated);
  };

  return (
    <div className="h-screen w-full bg-gray-100 p-6">
      <h1 className="text-3xl text-purple-700 font-bold mb-4">Add Your Task</h1>

      {/* Add Task */}
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task..."
          className="flex-1 p-2 border border-purple-400 rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-purple-700 text-white px-4 rounded hover:bg-purple-900 transition"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded shadow"
          >
            <div className="flex items-center space-x-3">
              <p className="text-gray-800">{task.text}</p>
              {task.file && (
                <span className="text-sm text-purple-600">📎 {task.file}</span>
              )}
            </div>

            <div className="flex space-x-2">
              <label className="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300">
                Upload
                <input
                  type="file"
                  onChange={(e) => handleFileUpload(e, index)}
                  className="hidden"
                />
              </label>
              <button
                onClick={() => handleEditTask(index)}
                className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManagement;

