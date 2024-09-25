import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css';

const Mahabhrat = () => {
  const videoUrls = [
    "https://youtu.be/6wlRJAbtBY8",
    "https://youtu.be/VwF7bOKMrBU",
    "https://youtu.be/zf2maR4WsTo",
    "https://youtu.be/ac_XHDunO2w",
    "https://youtu.be/UyOn03LGhYc",
    "https://youtu.be/fX2tRf0z5jU",
    "https://youtu.be/aMyEWBqHAOc",
    "https://youtu.be/_xYGikzhTQc",
    "https://youtu.be/YOP2f6UC9nI",
    "https://youtu.be/tCXdmNkenZY"
  ];

  return (
    <div>
      <h2>CID Tamil</h2>
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

export default Mahabhrat;
