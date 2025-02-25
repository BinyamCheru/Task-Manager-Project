import { useState } from "react";
import Modal from "./components/Modal";
import TaskList from "./components/TaskList";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Navbar />
      <TaskList />
    </main>
  );
}

export default App;
