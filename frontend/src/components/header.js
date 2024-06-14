import React, { useRef } from 'react'


export default function Header(props) {
 


  return (
    <header className='container' style={{ fontSize: "10px", padding: "20px", marginBottom: "150px",marginTop:"50px" }}>

      <img src="../logo.png" style={{ width: "90px", height: "80px", padding: "5px", marginBottom: "30px" }} /><span style={{ fontSize: "65px", marginTop: "10px" }}> HueHarmonie</span>

      <div className="flex-container">
        <div><button onClick={props.onClickScroll} className="btn btn-light oval-btn" >Try Now</button></div>
        <div style={{ marginTop: "11px" }}>
          <h5>Harmonize Your Hues — Effortlessly</h5>
          <h5>Dress up, decorate, or design with harmonious color coordination —
            all at your fingertips. Try it now!</h5>
        </div>
      </div>
      <div id="newHead"></div>



    </header>
  )
}
