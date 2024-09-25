import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css';

const Avengers = () => {
  const videoUrls = [
    "https://youtu.be/udKE1ksKWDE",
    "https://youtu.be/uC9qU3X1JgM",
    "https://youtu.be/u1NlmFa0-68",
    "https://youtu.be/QATCAVR-It4",
    "https://youtu.be/uZgEMlnwG-Y",
    "https://youtu.be/g5_w5XrC7Ts",
    "https://youtu.be/jQoNILVFFvs",
    "https://youtu.be/mKZbYre2kxk?list=PLEUUI-Qf2xkSqnB95bjpTdWDUX9_e9Rq2",
    "https://youtu.be/atOgj_ZaO7M",
    "https://youtu.be/ioeoCbDiMvE"
  ];

  return (
    <div>
      <h2>Avengers World</h2>
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
}

export default Avengers;
