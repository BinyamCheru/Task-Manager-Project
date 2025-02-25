import Button from "./Button";

const Form = () => {
  return (
    <form className="flex flex-col space-y-4 p-6 m-4">
      {/* Task Input */}
      <input type="text" className="p-2 rounded-md" placeholder="Task" />
      {/* Due date Input */}
      <input
        type="date"
        className="p-2 rounded-md"
        placeholder="Due date"
      />
      {/* Description of task Input */}
      <textarea
        name="description"
        className="p-2 rounded-md"
        rows={8}
        placeholder="Description ..."
      ></textarea>
      <Button className="self-end" text="Add Task" type="submit" />
    </form>
  );
};
export default Form;
