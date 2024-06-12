import React from 'react';

const MainContent = (props) => {
  return (
    <div
    className="bg-color-wheel-container-xs-mx-0" style={{backgroundColor : props.backgroundColor}}>
      <div className="color-picker-box" ref={props.colorPicker}></div>
      <div>
        <div className="pt-4"></div>
        <div className="text-center mx-auto bg-light hex-code-input"id="hexbox">{props.backgroundColor}</div>
        <div className="pb-4"></div>
        <div className="text-center mx-auto">
          <button type="button" className="generate-button" onClick={props.button}>Generate</button>
        </div>
        <div className="pb-4"></div>
      </div>
    </div>

  )
}

export default MainContent;

