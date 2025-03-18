import React, { useEffect, useRef } from 'react'
import '../Style/video.css'

function Video() {



  return (
    <div>
        <div>
            <video className='vid' autoPlay loop name="media" muted>
                <source src="https://parquemarino.org/wp-content/uploads/2024/06/intro-logo-tiburon-vidrios-rotos.webm" type="video/webm"/>
            </video>
        </div>
    </div>
  )
}

export default Video