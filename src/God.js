import React from 'react'
import './Kids.css'
import ReactPlayer from 'react-player';
const God = () => {
  return (
    <div>
      <h2>God devotional songs</h2><br></br>
      <div id='sx'>
      <ReactPlayer 
                url="https://youtu.be/_RZaqURAvxc"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
              <ReactPlayer 
                url="https://youtu.be/2CNBmiThnQY"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/qCiXGUIzqNs"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/Z3AfjuphCpA"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/DvWBoA5u0pU"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <h2>More Songs</h2><br></br>
            <div id='sy'>
            <ReactPlayer 
                url="https://youtu.be/lIxPKZvl640"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
               <ReactPlayer 
                url="https://youtu.be/LE44rtt-qcQ"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/cdha_Z4PjeM"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/rookiq-TUv8?list=RDGMEM916WJxafRUGgOvd6dVJkeQ"
                width="250px"
                height="300px"
                controls={true}
                playing={false}
            />
             <ReactPlayer 
                url="https://youtu.be/LIBp1FhvBsU"
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

export default God