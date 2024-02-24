import React from 'react';
import { FaStar } from "react-icons/fa6";

export default function CateringCards(props) {
  return (
    <div>
      <div className="card text-bg-dark" style={{ width: '20rem', height: '16rem', position: 'relative' }}>
        <img src={props.img} className="card-img" style={{ height: '100%', objectFit: 'cover' }} alt="..." />
        <div className="card-img-overlay pos" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)' }}>
          <h5 className="card-title text-light" style={{ marginTop: 'auto' }}>
            {props.title} {props.start}<FaStar color='yellow' />
          </h5>
        </div>
      </div>
    </div>
  );
}
