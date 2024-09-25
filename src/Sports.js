import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css';

const Sports = () => {
  const videoUrls = [
    "https://youtu.be/HK6B2da3DPA",
    "https://youtu.be/UdJZ998e_aU",
    "https://youtu.be/3-6SCbAPEzU",
    "https://youtu.be/pnFUDbwoM18",
    "https://youtu.be/8S5lApwP3yo",
    "https://youtu.be/ZT2ilX9MC1w",
    "https://youtu.be/mVupXkSH4sQ",
    "https://youtu.be/WQdqgrWvy6g",
    "https://youtu.be/2RNwLSKURDo",
    "https://youtu.be/vCzoidqtwb8"
  ];

  return (
    <div>
      <h2>Memorable Moments</h2>
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
}

export default Sports;
