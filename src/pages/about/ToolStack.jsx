import React from 'react';
import {
     SiVisualstudiocode ,
     SiVercel ,
     SiPostman
} from "react-icons/si";

function ToolStack() {
  return (
    <div className="row justify-content-center gap-4">
        <div className="col-4 col-md-2 tech-icons">
            <SiVisualstudiocode style={{marginBottom:'15px'}} title='Visual Studio Code' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <SiPostman style={{marginBottom:'15px'}} title='Postman' />
        </div>
        <div className="col-4 col-md-2 tech-icons">
            <SiVercel style={{marginBottom:'15px'}} title='Vercel' />
        </div>
    </div>
  )
}

export default ToolStack