import React from 'react'

export default function Card(props) {
  if(props.answer.length === 0) {
    return <div></div>;
  }
  return (
    <div>
    <div className="container-fluid text-center pt-5">
      <div className="row">
        <div className="suggestions col mx-auto">
          <div className="color-box-mx-auto" style={{backgroundColor : props.answer[0][0]}}></div>
          <p className="hex-code my-4 mx-auto">{props.answer[0][0]}</p>
          <p className="fs-6 description">
            {props.answer[0][1]}
          </p>
        </div>
        <div className="suggestions col mx-auto">
          <div className="color-box-mx-auto" style={{backgroundColor : props.answer[1][0]}}></div>
          <p className="hex-code my-4 mx-auto">{props.answer[1][0]}</p>
          <p className="description">
            {props.answer[1][1]}
          </p>
        </div>
        <div className="suggestions col mx-auto">
          <div className="color-box-mx-auto" style={{backgroundColor : props.answer[2][0]}}></div>
          <p className="hex-code my-4 mx-auto">{props.answer[2][0]}</p>
          <p className="description">
          {props.answer[2][1]}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

