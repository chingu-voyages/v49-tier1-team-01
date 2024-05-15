import {useState} from 'react'



function App() {
  const [message, setMessage] = useState(null);
  const [answer, setAnswer] = useState(null);

  function handleInput(e) {
    setMessage(e.target.value);
  }
  console.log(message);
  function handleButtonClick(e) {
    e.preventDefault();
    fetch('http://localhost:3001',{
      method: 'POST',
      body: message,
    }).then(async (r) => {
      const answer = await r.json();
      setAnswer(answer.message.content);
    })
  }
  return (
    <div>
      <input type="color" onInput={handleInput}/>
      <button onClick={handleButtonClick}>Submit</button>
      { answer }
      <div style={{ backgroundColor: answer, height: '30px', width: '30px', border: '1px solid' }}></div>
    </div>
  );
}

export default App;
