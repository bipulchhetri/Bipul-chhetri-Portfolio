import React from 'react'
import { FaDownload } from 'react-icons/fa';
import Pdf from '../assets/Bipul.pdf';
const About = () => {
  return (
    <div className='max-w-screen-lg text-white flex justify-between align-center p-8 about mx-auto'>
      <div className='left w-1/2 about1'>
      <h3 className="text-4xl font-bold border-b-4 border-pink-500 pb-2 inline">
           About Me
          </h3>
<p className='tracking-wider leading-6 pt-5	'>Hello,My Name is Bipul chhetri.I am From Jaldapara which is located in Alipurduar dist, West-Bengal.Currenly I pursing my Btech in computer scinece and Engineering in Final year.If I talking about My profession experience then I have 6 Months <b>SEO</b> Internship and Now I learning front-end development.I am proficient in HTML,CSS,JAVASCRIPT,REACT JS,Bootsrap,AND Tailwind CSS</p>
      </div>
      <div className="right w-1/1 about2 ">
      <h3 className="text-4xl font-bold border-b-4 border-pink-500 p-2 inline">
           Contact Me
          </h3>
<p className='pt-5'>Email Me:bipulchhetri@gmail.com</p>
<a href={Pdf} target="_blank" rel="noopener noreferrer"><button className='text-white w-auto px-10 py-2 mt-8 flex items-center bg-orange-500 border-2 rounded-lg text-lg font-bold cursor-pointer border-black hover:scale-105 duration-500'>Download Resume
<FaDownload className='ml-5'/>
</button></a>

 </div>
 
    </div>
  )
}

export default About
