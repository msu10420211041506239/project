import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css';

const Comedy = () => {
  const videoUrls = [
    "https://youtu.be/EiyJsI3y91Y",
    "https://youtu.be/SXuAiJweJxQ",
    "https://youtu.be/_WLJdO0eq7E",
    "https://youtu.be/xMTyetet7B0",
    "https://youtu.be/irr0lwW9QA8",
    "https://youtu.be/4An-pPOLVEE",
    "https://youtu.be/0hsc6tRLOHA",
    "https://youtu.be/opHw49AaaOA",
    "https://youtu.be/7mDaf2a4zQ4",
    "https://youtu.be/JD9wLHh-Z-E"
  ];

  return (
    <div>
      <h2>Old Movie Comedy</h2>
      <div id='sx'>
        {videoUrls.map((url, index) => (
          <ReactPlayer 
            key={index}
            url={url}
            className='react-player'
            controls={true}
            playing={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Comedy;
