import { useState } from "react";
// import './App.css';
function App() {
  const [count, setCount] = useState(3);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  

  return (
    
    <div>
      <p>you clicked {count} items</p>
      <article>{todos[0]["text"]}</article>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
    </div>
    
  );
  
}

export default App;
