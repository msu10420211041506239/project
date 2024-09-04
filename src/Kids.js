import React from 'react'
import ReactPlayer from 'react-player';
import './Kids.css'
const Kids = () => {
  return (
    <div>
      <h2>Ninja Hattori collection</h2><br></br>
      <div  id='sx'>
       <ReactPlayer 
                url="https://youtu.be/sF5SZdHYcn4?si=mlG8HlFSvU1u3eTH"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=29-AeVIC75s"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/kjmc-4HsQCg"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/PhL84rr0xKE"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/dXgAT7a8TVs"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
<h2>Doraemon Collection</h2><br></br>
<div id='sy'>
<ReactPlayer 
                url="https://youtu.be/5s07t0jje1w"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
            <ReactPlayer 
                url="https://youtu.be/RHPcJnAF0yQ"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
            <ReactPlayer 
                url="https://youtu.be/YdmsrCD6FxI"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
            <ReactPlayer 
                url="https://youtu.be/xVXf_etCbfk"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
            <ReactPlayer 
                url="https://youtu.be/xVXf_etCbfk"
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

export default Kids