import React from 'react'
import './Kids.css'
import ReactPlayer from 'react-player';
const Comedy = () => {
  return (
    <div>
    <h2>Old Movie Comedy</h2><br></br>
    <div  id='sx'>
     <ReactPlayer 
              url="https://youtu.be/EiyJsI3y91Y"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
            <ReactPlayer 
              url="https://youtu.be/SXuAiJweJxQ"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/_WLJdO0eq7E"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/xMTyetet7B0"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/irr0lwW9QA8"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
<h2>New Comedy</h2><br></br>
<div id='sy'>
<ReactPlayer 
              url="https://youtu.be/4An-pPOLVEE"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/0hsc6tRLOHA"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/opHw49AaaOA"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/7mDaf2a4zQ4"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/JD9wLHh-Z-E"
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

export default Comedy