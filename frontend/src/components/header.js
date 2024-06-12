import React, { useRef } from 'react'


export default function Header(props) {
  return (
    <header className='container zoom-out' style={{ fontSize: "10px", padding: "20px", marginBottom: "50px", marginTop: "50px" }}>

    <div style={{ maxWidth: "800px", }}>
      <img src="../logo.png" style={{ width: "90px", height: "80px", padding: "5px",paddingLeft:'15px', marginBottom: "20px" }} />
      <span style={{ fontSize: "65px", paddingLeft: "10px", marginTop: "10px" }}>
        HueHarmonie
      </span>
    </div>

      <div >
        <div className="flex-container" >
          <div><button onClick={()=>props.onClickScroll()} className="btn btn-light oval-btn" style={{ display: 'inline', width: '150px',marginTop: '30px',marginRight: "20px" }} >Try Now</button></div>
          <div>
            <div style={{ marginTop: "11px" }}>
              <h5 style={{ marginTop: "30px" }} className="description" >Harmonize Your Hues — Effortlessly</h5>
              <h5 className="description">Dress up, decorate, or design with harmonious color coordination — all at your fingertips. </h5>
            </div>
          </div>
        </div>
        <h5 className="description" style={{lineHeight: '30px',marginTop: "40px"}}> <strong>How Does It Work:</strong>  We use AI to find perfect color matches for your chosen hue. Simply pick a base color, and get three complementary shades that look great together. </h5>
      </div>

      <div id="newHead"></div>



    </header>
  )
}
