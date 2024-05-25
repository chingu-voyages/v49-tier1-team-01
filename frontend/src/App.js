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
    const response = await fetch( process.env.REACT_APP_FETCH_URL ,{
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
    <div>
      <div>
        <input type="color" onInput={handleInput}/>
        <button onClick={handleButtonClick}>Generate</button> 
      </div>
      <div className='colorContainer'>
        {answer.map((color, i) => 
          <div>
            <div key={i} className='colorDiv' style={{ backgroundColor: color[0] }}></div>
            <div className='textDiv'>{color[0]}</div>
            <div className='descriptionDiv'>{color[1]}</div>
          </div>)}
      </div>
    </div>
  );
}

export default App;
