import SingleTask from "./SingleTask";

const TaskList = ({ tasks }) => {
  return (
    <section className="grid items-center md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      {tasks.map((task) => {
        return <SingleTask key={task.id} {...task} />;
      })}
    </section>
  );
};
export default TaskList;
