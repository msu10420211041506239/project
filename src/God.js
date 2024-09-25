import React from 'react';
import './Kids.css';
import ReactPlayer from 'react-player';

const God = () => {
  const videoUrls = [
    "https://youtu.be/_RZaqURAvxc",
    "https://youtu.be/2CNBmiThnQY",
    "https://youtu.be/qCiXGUIzqNs",
    "https://youtu.be/pFLu9n1StDM",
    "https://youtu.be/DvWBoA5u0pU",
    "https://youtu.be/lIxPKZvl640",
    "https://youtu.be/LE44rtt-qcQ",
    "https://youtu.be/cdha_Z4PjeM",
    "https://youtu.be/rDC2ATWhaeI",
    "https://youtu.be/LIBp1FhvBsU"
  ];

  return (
    <div>
      <h2>God Devotional Songs</h2>
      <div id='sx'>
        {videoUrls.map((url, index) => (
          <ReactPlayer 
            key={index}
            url={url}
            className='react-player'
            controls={true}
            playing={false}
            width="250px"
            height="300px"
          />
        ))}
      </div>
    </div>
  );
};

export default God;
