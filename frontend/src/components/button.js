export default async function Button() {
  const button = (e) => {
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
  }
  return button;
}
