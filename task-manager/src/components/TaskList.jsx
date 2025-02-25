import SingleTask from "./SingleTask";

const tasks = [
  {
    id: 1,
    task: "clean house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    isComplete: false,
  },
  {
    id: 2,
    task: "clean house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    isComplete: false,
  },
  {
    id: 3,
    task: "clean house",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    isComplete: false,
  },
];

const TaskList = () => {
  return (
    <section className="grid items-center md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      {tasks.map((task) => {
        return <SingleTask key={task.id} {...task} />;
      })}
    </section>
  );
};
export default TaskList;
