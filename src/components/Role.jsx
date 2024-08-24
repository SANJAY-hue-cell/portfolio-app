import React from 'react' ;
import Typewriter from 'typewriter-effect' ;

function Role() {
  return (
    <Typewriter
    options={{
        strings : [
            "Full Stack Developer" ,
            "MERN Stack Developer" ,
            "Web Developer" ,
            "Front End Developer"
        ] ,
        autoStart : true ,
        loop : true ,
        deleteSpeed : 50 ,
    }} 
    />
  )
}

export default Role