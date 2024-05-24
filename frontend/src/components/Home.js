import React from "react";

export default function Home(props) {
  return (
    
    <div className="container-fluid-xs my-0 px-0">
      <header className="container ">
        <h1 className="fw-bold py-2 fs-3">LOGO APP NAME</h1>
      </header>
      <main className="bg-color-wheel container-xs mx-0">
        <div className="color-wheel" id="changecolor" style={{backgroundColor:props.color}}>
          <div id="colortext" >
            <h2 id="h2color" className="text-center fw-medium pt-5 pb-1">
              Harmonize Your Hues — Effortlessly
            </h2>
            <p id="pcolor" className="text-center pb-3 px-1">
              Dress up, decorate, or design with harmonious color coordination —
              all at your fingertips. Try it now!
            </p>
          </div>
          <div
            className="color-wheel-placeholder"
            id="picker"
            ref={props.colorPickerRef}
          ></div>
          <div className="slider-placeholder"></div>
          <div className="pt-4"></div>
          <div
            className="text-center mx-auto bg-light hex-code-input"
            id="hexbox"
          >
            {props.color}
          </div>
          <div className="pb-4"></div>
          <div className="text-center mx-auto">
            <button type="button" className="text-center btn generate-button">
              Generate
            </button>
          </div>
          <div className="pb-4"></div>
        </div>
      </main>
      <div className="filler"></div>
      <div className="container-fluid text-center pt-5">
        <div className="row">
          <div className="suggestions col mx-auto">
            <div className="color-box mx-auto">color box here</div>
            <p className="hex-code my-4 mx-auto">HEX Code</p>
            <p className="fs-6 description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus nihil tempora numquam quod eos nostrum iusto sit
              obcaecati beatae distinctio.
            </p>
          </div>
          <div className="suggestions col mx-auto">
            <div className="color-box mx-auto">color box here</div>
            <p className="hex-code my-4 mx-auto">HEX Code</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
              illo impedit hic eum saepe praesentium qui, ipsa nulla quos fugit
              libero minima natus?
            </p>
          </div>
          <div className="suggestions col mx-auto">
            <div className="color-box mx-auto">color box here</div>
            <p className="hex-code my-4 mx-auto">HEX Code</p>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              mollitia eum, ad nisi omnis corrupti pariatur ipsa, ullam earum
              necessitatibus dolores placeat odio nihil?
            </p>
          </div>
        </div>
      </div>
      <div className="filler"></div>
      <footer className="text-center">
        <p className="footer-text">
          Repository here:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/chingu-voyages/v49-tier1-team-01"
          >
            https://github.com/chingu-voyages/v49-tier1-team-01
          </a>
        </p>
      </footer>
    </div>
  );
}
