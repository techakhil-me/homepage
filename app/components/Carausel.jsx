import React, { useState, useEffect } from 'react';


const Carausel = () => {
    return(
    <div className="frame">
    <div className="div">
      <div className="h-ighlights">HIGHLIGHTS</div>
      <p className="join-us-on-a-dynamic">JOIN US ON A DYNAMIC JOURNEY, EMBRACING EMERGING</p>
    </div>
    <div className="div-2">
      <div className="slide">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="slide-2" />
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper">14 . 06 . 2023</p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="slide-wrapper">
              <div className="slide-2" />
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper">14 . 06 . 2023</p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="slide-2" />
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper">14 . 06 . 2023</p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <div className="slide-2" />
            </div>
          </div>
          <div className="div-wrapper">
            <p className="text-wrapper">14 . 06 . 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Carausel;
