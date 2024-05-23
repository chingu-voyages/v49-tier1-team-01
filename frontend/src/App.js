import {useState} from 'react'
import Home from "./components/Home"
import './App.css'


function App() {
  const [message, setMessage] = useState(null);

  const [answer, setAnswer] = useState([]);

  function handleInput(e) {
    setMessage(e.target.value);
  }

  async function handleButtonClick(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3001',{
      method: 'POST',
      body: message,
    });
    if (response.ok) {
      const answerObject = await response.json();
      const answerArray = Object.entries(answerObject);
      setAnswer(answerArray);
    }
  }

  return (
    <Home/>
  );
}

export default App;
