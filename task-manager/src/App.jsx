import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Modal/>
    </main>
  );
}

export default App;
