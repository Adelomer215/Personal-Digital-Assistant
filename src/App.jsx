// eslint-disable-next-line no-unused-vars
import React from "react";

import ProfileCars from "./components/ProfileCard";

// images
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  const data = [
    {
      title: "Alexa",
      twiter: "@alexa99",
      dis: "Alexa was created by Amazon and helps you buy things.",
      img: AlexaImage,
    },
    {
      title: "Cortana",
      twiter: "@Cortana",
      dis: "Cortana was made by Microsoft. Who knows what it does?",
      img: CortanaImage,
    },
    {
      title: "siri",
      twiter: "@siri01",
      dis: "Siri was made by Apple and is being phased out",
      img: SiriImage,
    },
  ];

  return (
    <>
      <h1>Personal-Digital-Assistant</h1>
      <div className="container ProfileCards">
        {data.map((ele, idx) => {
          return <ProfileCars key={idx} ele={ele} />;
        })}
      </div>
    </>
  );
};

export default App;
