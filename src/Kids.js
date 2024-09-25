import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css';

const Kids = () => {
  const videoUrls = [
    "https://youtu.be/sF5SZdHYcn4?si=mlG8HlFSvU1u3eTH",
    "https://www.youtube.com/watch?v=29-AeVIC75s",
    "https://youtu.be/kjmc-4HsQCg",
    "https://youtu.be/PhL84rr0xKE",
    "https://youtu.be/dXgAT7a8TVs",
    "https://youtu.be/5s07t0jje1w",
    "https://youtu.be/RHPcJnAF0yQ",
    "https://youtu.be/NE4oME8F8Fs",
    "https://youtu.be/xVXf_etCbfk",
    "https://youtu.be/JktTDwNCaCg"
  ];

  return (
    <div>
      <h2>Ninja Hattori Collection</h2>
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

export default Kids;
