import React, { useRef, useState, useEffect, forwardRef } from 'react';

const Card = forwardRef((props, ref) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ maxHeight: '0px' });

  useEffect(() => {
    if (props.className.includes('expanded')) {
      setStyle({ maxHeight: `${cardRef.current.scrollHeight + 500}px` });
    } else {
      setStyle({ maxHeight: '0px' });
    }
  }, [props.className]);

  if (props.answer.length === 0) {
    return <div></div>;
  }

  return (
    <div
      ref={(node) => {
        cardRef.current = node;
        if (ref) ref.current = node;
      }}
      style={style}
      className={props.className}
    >
      <div className="container-fluid text-center pt-5">
        <div className="row">
          {props.answer.slice(0, 3).map(([color, description], index) => (
            <div key={index} className="suggestions col mx-auto">
              <div className="color-box-mx-auto" style={{ backgroundColor: color }}></div>
              <p className="hex-code my-4 mx-auto">{color}</p>
              <p className="fs-6 description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Card;
