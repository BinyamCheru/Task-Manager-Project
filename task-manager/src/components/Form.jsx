import { useState } from "react";
import Button from "./Button";
import { nanoid } from "nanoid";

const Form = ({
  addTask,
  taskTitle,
  taskDueDate,
  taskDescription,
  setTaskTitle,
  setTaskDueDate,
  setTaskDescription,
  toggleModal,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskTitle, taskDueDate, taskDescription);
    if (!taskDescription || !taskTitle || !taskDueDate) return;
    const newTask = {
      id: nanoid(),
      task: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      isComplete: false,
    };
    addTask(newTask);
    toggleModal();
    setTaskTitle("");
    setTaskDueDate("");
    setTaskDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-6 my-8 w-3/4 rounded-md"
    >
      {/* Task Input */}
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        placeholder="Task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      {/* Due date Input */}
      <input
        type="date"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        placeholder="Due date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
      />
      {/* Description of task Input */}
      <textarea
        name="description"
        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
        rows={5}
        placeholder="Description ..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <Button className="self-end" text="Add Task" type="submit" />
    </form>
  );
};
export default Form;
