import React from 'react';
import ReactPlayer from 'react-player';
import './Kids.css'

const Sports = () => {
  return (
    <div>
    <h2>Memorable Moments</h2><br></br>
    <div  id='sx'>
     <ReactPlayer 
              url="https://youtu.be/HK6B2da3DPA"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
            <ReactPlayer 
              url="https://youtu.be/UdJZ998e_aU"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/3-6SCbAPEzU"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/pnFUDbwoM18"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/8S5lApwP3yo"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
<h2>Highlihgts</h2><br></br>
<div id='sy'>
<ReactPlayer 
              url="https://youtu.be/ZT2ilX9MC1w"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/mVupXkSH4sQ"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/WQdqgrWvy6g"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/2RNwLSKURDo"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/vCzoidqtwb8"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />

</div>
  </div>
  </div>
    
  )
}

export default Sports