import react from "react";

export default function Upper(props) {
  return (
    <main className="bg-color-wheel container-xs mx-0">
      <div
        className="color-wheel"
        id="changecolor"
        style={{ backgroundColor: props.color }}
      >
        <div id="colortext">
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
  );
}
