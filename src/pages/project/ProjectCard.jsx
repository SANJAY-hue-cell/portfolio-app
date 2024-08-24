import React from 'react';
import {
     FaGithub ,
     FaExternalLinkSquareAlt 
} from "react-icons/fa";

function ProjectCard({imgSrc , isBlog , title , description , githubLink , demoLink}) {
  return (
    <div class="card project-card-container py-2" >
      <img src={imgSrc} class="card-img-top px-3" alt="..."/>
      <div class="card-body text-center">
        <h5 class="card-title">
            {title}
        </h5>
        <p class="card-text">
            {description}
        </p>
        <div className='d-flex justify-content-center gap-3'>
          <a className='btn ' href={githubLink} target='_blank'>
            <FaGithub style={{marginBottom:'3px'}} /> &nbsp;
            {isBlog ? 'Blog' : 'GitHub'}
          </a>
          {!isBlog && demoLink && (
            <a className='btn' href={demoLink} target='_blank'>
                <FaExternalLinkSquareAlt style={{marginBottom:'3px'}}/> &nbsp;
                {"Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard