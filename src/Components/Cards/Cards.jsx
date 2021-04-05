import React, { useState, useEffect } from "react";
import "./Cards.styles.css";

function RenderCard(card, index) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setActive(false);
    });
  });

  return (
    <div
      onClick={() => setActive(!active)}
      className={active ? "card active" : "card"}
      key={index}
    >
      <div className="card-img">
        {card.playlistImage ? (
          <div className="img-overlay">
            <span className="workout-quantity">{card.workoutNumber}</span>
            <br />
            <span>WORKOUTS</span>
            <br />
            <img src={card.playlistImage} alt="" />
          </div>
        ) : null}
        <img src={card.bigCardImage} alt="paddle-trainer" />
      </div>
      <div className="workout-info">
        <div className="workout-text">
          <div className="workout-title">
            <span>{card.title}</span>
          </div>
          {card.timerImage ? (
            <div className="workout-statistics">
              <ul>
                <li>
                  <img src={card.timerImage} alt="icon timer" />
                  <span>{card.timerDetails}</span>
                </li>
                <li>
                  <img src={card.meterImage} alt="icon pacer" />
                  <span>{card.meterDetails}</span>
                </li>
              </ul>
            </div>
          ) : null}
          <div className="view-details">
            <a target="_blank" rel="noreferrer">
              View Details
            </a>
          </div>
        </div>
        <div className="trainer-img">
          <img src={card.smallCardImage} alt="trainer img small" />
        </div>
      </div>
    </div>
  );
}

export default RenderCard;
