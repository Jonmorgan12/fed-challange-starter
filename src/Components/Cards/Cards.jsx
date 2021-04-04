import React, { useState } from "react";
import "./Cards.styles.css";
// import { Link } from "react-router-dom";
import Image1 from "../../Assets/iFit-paddle-trainer-big-img.jpeg";
import Image2 from "../../Assets/iFit-timer.png";
import Image3 from "../../Assets/iFit-pacer.png";
import Image4 from "../../Assets/iFit-paddle-trainer-smll-img.jpeg";
import Image5 from "../../Assets/iFit-playlist-img.png";

function Cards() {
  return (
    <div className="card-container">
      {/* CARD ONE */}
      <div className="card">
        <div className="card-img">
          <img src={Image1} alt="paddle-trainer" />
        </div>
        <div className="workout-info">
          <div className="workout-text">
            <div className="workout-title">
              <span>
                <b>Lake Inniscarra, Ireland-Pyramid</b>
              </span>
            </div>
            <div className="workout-statistics">
              <ul>
                <li>
                  <img src={Image2} alt="icon timer" />
                  <span>
                    <b>30:53</b>
                  </span>
                </li>
                <li>
                  <img src={Image3} alt="icon pacer"></img>
                  <span>
                    <b>6,248 M</b>
                  </span>
                </li>
              </ul>
            </div>
            <div className="view-details">
              <a target="_blank" rel="noreferrer">
                <b>View Details</b>
              </a>
            </div>
          </div>
          <div className="trainer-img">
            <img src={Image4} alt="trainer img small" />
          </div>
        </div>
      </div>
      {/* CARD TWO */}
      <div className="card">
        <div className="card-img">
          <img src={Image1} alt="paddle-trainer" />
          <div className="img-overlay">
            <span className="workout-quantity">9</span>
            <br />
            <span>WORKOUTS</span>
            <br />
            <img src={Image5} alt="" />
          </div>
        </div>
        <div className="workout-info">
          <div className="workout-text">
            <div className="workout-title">
              <span>
                <b>Lake Inniscarra, Ireland-Pyramid</b>
              </span>
            </div>
            <div className="view-details">
              <a target="_blank" rel="noreferrer">
                <b>View Details</b>
              </a>
            </div>
          </div>
          <div className="trainer-img">
            <img src={Image4} alt="trainer img small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
