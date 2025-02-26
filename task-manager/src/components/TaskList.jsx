import SingleTask from "./SingleTask";

const TaskList = ({ tasks, deleteTask, editTask, taskComplete }) => {
  return (
    <section className="mt-4 grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            editTask={editTask}
            taskComplete={taskComplete}
          />
        );
      })}
    </section>
  );
};
export default TaskList;
