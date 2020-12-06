import React from 'react';

import './styles.css'

export default function Hero(props) {

  return (
    <div id="hero-page">
      <div className="hero-brand">
        <h2>AUTO</h2>
        <p>GARAGE</p>
      </div>

      <div className="hero-current-page">
        <h3>{props.page}</h3>
      </div>
    </div>
  );
}