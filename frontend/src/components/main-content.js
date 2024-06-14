import React from 'react';


export default function MainContent(props) {
  return (
    <div className="bg-color-wheel-container-xs-mx-0 mt-10"  style={{backgroundColor : props.backgroundColor}}>
      <div className='color-wheel mt-5' ref={props.scrollToNextSectionRef} ></div>
      {/* <div className="color-wheel" id="changecolor">
        <div id="colortext" >
          <h2 id="h2color" className="text-center fw-medium pt-5 pb-1">
            Harmonize Your Hues — Effortlessly
          </h2>
          <p id="pcolor" className="text-center pb-3 px-1">
            Dress up, decorate, or design with harmonious color coordination —
            all at your fingertips. Try it now!
          </p>
        </div>
      </div> */}
      <div ref={props.colorPicker}></div>

      <div >
        <div className="pt-4"  ></div>
        <div className="text-center mx-auto bg-light hex-code-input"id="hexbox">{props.backgroundColor}</div>
        <div className="pb-4"></div>
        <div className="text-center mx-auto">
          <button type="button" className="text-center btn generate-button" onClick={props.button}>Generate</button>
        </div>
        <div className="pb-4"></div>
      </div>
    </div>

  )
}

