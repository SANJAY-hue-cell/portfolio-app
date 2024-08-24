import React from 'react'
import {
  ProjectCard
} from '../page';
import encrypt_decrypt from '../../assets/projects/encrypt-decrypt.jpg';
import weather from '../../assets/projects/weather.jpeg';
import bmi from '../../assets/projects/bmi.jpeg';
import gpt3 from '../../assets/projects/gpt3.jpeg';
import todo from '../../assets/projects/todo.jpeg';

function Project() {
  return (
    <div className="container-fluid projects-container">
       <h5 className='text-center fs-1'>
            MY Latest {" "}
            <span style={{color:'#ab3483'}}>
              <strong>
                 Works
              </strong>
            </span>
          </h5>
          <p className='fs-5 text-center'>
            Below are few projects I've worked on recently
          </p>
      <div className="container">
        <div className="row justify-content-center gap-4">
         

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}> 
            <ProjectCard 
            imgSrc = {encrypt_decrypt}
            isBlog ={false}
            title = 'Encryption and Decryption'
            description = 'Encryption and Decryption is shown in real time'
            githubLink = 'https://github.com/SANJAY-hue-cell/encryption-decryption'
            demoLink = 'https://encryption-decryption-three.vercel.app/'
            />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}>
            <ProjectCard 
            imgSrc = {gpt3}
            isBlog ={false}
            title = 'GPT-3'
            description = 'Its an static app which showcases Css skills '
            githubLink = 'https://github.com/SANJAY-hue-cell/static-gpt-3'
            demoLink = 'https://static-gpt-3.vercel.app/'
            />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}>
            <ProjectCard 
            imgSrc = {todo}
            isBlog ={false}
            title = 'Todo Task Manager'
            description = 'Helps you keep track of your daily tasks '
            githubLink = 'https://github.com/SANJAY-hue-cell/todo-list'
            demoLink = 'https://todo-list-drab-mu-82.vercel.app/'
            />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}>
            <ProjectCard 
            imgSrc = {weather}
            isBlog ={false}
            title = 'Weather App'
            description = 'It Generates real time weathers and weather changes using weather APIs.'
            githubLink = 'https://github.com/SANJAY-hue-cell/live-weather-app'
            demoLink = 'https://sanjay-hue-cell.github.io/live-weather-app/'
            />
          </div>

          <div className="col-12 col-md-3 mt-5" style={{height:'auto'}}>
            <ProjectCard 
            imgSrc = {bmi}
            isBlog ={false}
            title = 'BMI Calculator'
            description =  'Input your height and weight, and let our calculator ,calculates your BMI.'
            githubLink = 'https://github.com/SANJAY-hue-cell/bmi-calculator'
            demoLink = 'https://bmi-calculator-xi-three.vercel.app/'
            />
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Project