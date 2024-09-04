import React from 'react'
import ReactPlayer from 'react-player';
import './Kids.css'
const Avengers = () => {
  return (
    <div>
    <h2>Avengers World</h2><br></br>
    <div  id='sx'>
     <ReactPlayer 
              url="https://youtu.be/udKE1ksKWDE"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
            <ReactPlayer 
              url="https://youtu.be/uC9qU3X1JgM"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/u1NlmFa0-68"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/QATCAVR-It4"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
           <ReactPlayer 
              url="https://youtu.be/uZgEMlnwG-Y"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
<h2>More Videos</h2><br></br>
<div id='sy'>
<ReactPlayer 
              url="https://youtu.be/g5_w5XrC7Ts"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/jQoNILVFFvs"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/mKZbYre2kxk?list=PLEUUI-Qf2xkSqnB95bjpTdWDUX9_e9Rq2"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/skhDr0NLYXo?list=PLEUUI-Qf2xkSqnB95bjpTdWDUX9_e9Rq2"
              width="250px"
              height="300px"
              controls={true}
              playing={false}
          />
          <ReactPlayer 
              url="https://youtu.be/lSv38r5dVK0?list=PLEUUI-Qf2xkSqnB95bjpTdWDUX9_e9Rq2"
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

export default Avengers