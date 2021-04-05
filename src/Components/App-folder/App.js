import React from "react";
import "./App.css";
import RenderCard from "../Cards/Cards";

// Timer / Pacer / Playlists image
import Image2 from "../../Assets/iFit-timer.png";
import Image3 from "../../Assets/iFit-pacer.png";
import Image5 from "../../Assets/iFit-playlist-img.png";

// Card One
import Image1 from "../../Assets/iFit-paddle-trainer-big-img.jpeg";
import Image4 from "../../Assets/iFit-paddle-trainer-smll-img.jpeg";

// Card Two
import Image6 from "../../Assets/iFit-bannana-phone.jpeg";
import Image7 from "../../Assets/iFit-bannana-phone-trainer.jpeg";

// Card Three
import Image8 from "../../Assets/iFit-row-trainer.jpeg";
import Image9 from "../../Assets/iFit-row-trainer-small.jpeg";

// Card Four
import Image10 from "../../Assets/iFit-canoe-trainer.jpeg";
import Image11 from "../../Assets/iFit-canoe-trainer-small.jpeg";

// Card Five
import Image12 from "../../Assets/iFit-row-team.jpeg";
import Image13 from "../../Assets/iFit-row-team-small.jpeg";

// Card Six
import Image14 from "../../Assets/iFit-full-body-hiit.jpeg";
import Image15 from "../../Assets/iFit-full-body-hiit-trainer.jpeg";

// Card Seven
import Image16 from "../../Assets/iFit-kafue-river.jpeg";
import Image17 from "../../Assets/iFit-kafue-river-trainer.jpeg";

// Card Eight
import Image18 from "../../Assets/iFit-shred-and-burn.jpeg";
import Image19 from "../../Assets/iFit-shred-and-burn-trainer.jpeg";

function App() {
  const cardInformation = [
    //   Card One
    {
      bigCardImage: Image1,
      smallCardImage: Image4,
      title: "Lake Inniscarra, Ireland-Pyramid",
      timerImage: Image2,
      timerDetails: "30:53",
      meterImage: Image3,
      meterDetails: "6,248 M",
    },
    //   Card Two
    {
      bigCardImage: Image6,
      smallCardImage: Image7,
      title: "Performce Series",
      playlistImage: Image5,
      workoutNumber: "9",
    },
    //   Card Three
    {
      bigCardImage: Image8,
      smallCardImage: Image9,
      title: "Slow Pulls and Fast Intervals",
      timerImage: Image2,
      timerDetails: "44:13",
      meterImage: Image3,
      meterDetails: "9,948 M",
    },
    //   Card Four
    {
      bigCardImage: Image10,
      smallCardImage: Image11,
      title: "20 Minutes to Toned",
      playlistImage: Image5,
      workoutNumber: "12",
    },
    //   Card Five
    {
      bigCardImage: Image12,
      smallCardImage: Image13,
      title: "Charles Race, Boston, Massachusetts",
      timerImage: Image2,
      timerDetails: "36:22",
      meterImage: Image3,
      meterDetails: "8,648 M",
    },
    //   Card Six
    {
      bigCardImage: Image14,
      smallCardImage: Image15,
      title: "Full-Body HIIT Series Series",
      playlistImage: Image5,
      workoutNumber: "12",
    },
    //   Card Seven
    {
      bigCardImage: Image16,
      smallCardImage: Image17,
      title: "Kafue River, Zambia-Power Stroke Pyramid",
      timerImage: Image2,
      timerDetails: "22:22",
      meterImage: Image3,
      meterDetails: "4,660 M",
    },
    //   Card Eight
    {
      bigCardImage: Image18,
      smallCardImage: Image19,
      title: "Shred & Burn Series",
      playlistImage: Image5,
      workoutNumber: "16",
    },
  ];

  return (
    <div className="App">
      <div className="card-container">
        {cardInformation.map(
          ({
            index,
            bigCardImage,
            smallCardImage,
            title,
            timerImage,
            timerDetails,
            meterImage,
            meterDetails,
            playlistImage,
            workoutNumber,
          }) => (
            <RenderCard
              key={"card" + index}
              bigCardImage={bigCardImage}
              smallCardImage={smallCardImage}
              title={title}
              timerImage={timerImage}
              timerDetails={timerDetails}
              meterImage={meterImage}
              meterDetails={meterDetails}
              playlistImage={playlistImage}
              workoutNumber={workoutNumber}
            />
          )
        )}
      </div>
    </div>
  );
}
export default App;
