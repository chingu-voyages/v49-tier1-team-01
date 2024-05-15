import {useState} from 'react'
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
      const answer = await response.json();
      setAnswer(answer);
    }
  }

  return (
    <div>
      <div>
        <input type="color" onInput={handleInput}/>
        <button onClick={handleButtonClick}>Submit</button> 
      </div>
      { answer }
      <div className='colorContainer'>
        {answer.map((color, i) => <div key={i} className='colorDiv' style={{ backgroundColor: color }}></div>)}
      </div>
    </div>
  );
}

export default App;
