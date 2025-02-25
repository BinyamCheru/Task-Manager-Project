import { useState } from "react";
import Button from "./Button";
import { nanoid } from "nanoid";

const Form = () => {
  const [task, setTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskTitle, taskDueDate, taskDescription);
    const newTask = {
      id: nanoid(),
      task: taskTitle,
      description: taskDescription,
      isComplete: false,
    };
    setTask(newTask);
    setTaskTitle("");
    setTaskDueDate("");
    setTaskDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-6 my-8 w-3/4 bg-amber-100 rounded-md"
    >
      {/* Task Input */}
      <input
        type="text"
        className="p-2 rounded-md bg-amber-50"
        placeholder="Task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      {/* Due date Input */}
      <input
        type="date"
        className="p-2 rounded-md bg-amber-50"
        placeholder="Due date"
        value={taskDueDate}
        onChange={(e) => setTaskDueDate(e.target.value)}
      />
      {/* Description of task Input */}
      <textarea
        name="description"
        className="p-2 rounded-md bg-amber-50"
        rows={8}
        placeholder="Description ..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      ></textarea>
      <Button className="self-end" text="Add Task" type="submit" />
    </form>
  );
};
export default Form;
