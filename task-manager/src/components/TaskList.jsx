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
    <section>
      {tasks.map((task) => {
        return <SingleTask key={task.id} {...task} />;
      })}
    </section>
  );
};
export default TaskList;
