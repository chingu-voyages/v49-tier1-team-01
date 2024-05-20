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
      const answerObject = await response.json();
      const answerArray = Object.entries(answerObject);
      setAnswer(answerArray);
    }
  }

  return (
    <div class="container-xs my-0 px-0">
    <header class="container ">
        <h1 class="fw-bold py-2 fs-3">LOGO//APP NAME</h1>
    </header>
    <main class="bg-color-wheel container-xs mx-0">
        <div class="color-wheel" id="changecolor">
            <div id="colortext">
                <h2 id="h2color" class="text-center fw-medium pt-5 pb-1">Harmonize Your Hues — Effortlessly</h2>
                <p id="pcolor" class="text-center pb-3 px-1">Dress up, decorate, or design with harmonious color coordination — all at your fingertips. Try it now!</p>
            </div>
            <div class="color-wheel-placeholder" id="picker"></div>
            <div class="slider-placeholder"></div>
            <div class="pt-4"></div>
            <div class="text-center mx-auto bg-light hex-code-input" id="hexbox">#FFFFFF</div>
            <div class="pb-4"></div>
            <div class="text-center mx-auto">
                <button type="button" class="text-center btn generate-button" >Generate</button>
            </div>
            <div class="pb-4"></div>
        </div>
    </main>
    <div class="filler"></div>
    <div class="container-fluid text-center pt-5">
        <div class="row">
            <div class="suggestions col mx-auto">
                <div class="color-box mx-auto">// color box here</div>
                <p class="hex-code my-4 mx-auto">HEX Code</p>
                <p class="fs-6 description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nihil tempora numquam quod eos nostrum iusto sit obcaecati beatae distinctio. </p>
            </div>
            <div class="suggestions col mx-auto">
                <div class="color-box mx-auto">// color box here</div>
                <p class="hex-code my-4 mx-auto">HEX Code</p>
                <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, illo impedit hic eum saepe praesentium qui, ipsa nulla quos fugit libero minima natus? </p>
            </div>
            <div class="suggestions col mx-auto">
                <div class="color-box mx-auto">// color box here</div>
                <p class="hex-code my-4 mx-auto">HEX Code</p>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia eum, ad nisi omnis corrupti pariatur ipsa, ullam earum necessitatibus dolores placeat odio nihil?</p>
            </div>
        </div>
    </div>
    <div class="filler"></div>
    <footer class="text-center">
        <p class="footer-text">Repository here: <a target="_blank" href="https://github.com/chingu-voyages/v49-tier1-team-01">https://github.com/chingu-voyages/v49-tier1-team-01</a></p>
    </footer>
</div>
  );
}

export default App;
