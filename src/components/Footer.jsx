import React from 'react'
import { BsFacebook,BsTwitter } from 'react-icons/bs';
import { AiFillGithub,AiFillLinkedin} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className=' bg-slate-700 p-3'>
      <p className='text-white items-center flex justify-center pt-5 '>Developed By Bipul -2023</p>
      <div  className="social flex gap-3 my-2 cursor-pointer justify-center">
<div className="text-white text-3xl hover:scale-125 duration-500">
<a href="https://www.facebook.com/1bipulchhetri/"><BsFacebook/></a>
    </div>
<div className="text-white text-3xl hover:scale-125 duration-500">
<a href="https://twitter.com/1bipulchhetri"><BsTwitter/>
</a>
</div>
<div className="text-white text-3xl hover:scale-125 duration-500">
<a href="https://github.com/bipulchhetri"><AiFillGithub/></a>
</div>
<div className="text-white text-3xl hover:scale-125 duration-500">
  <a href="https://www.linkedin.com/in/bipul-chhetri/"><AiFillLinkedin/>
</a>
</div>
</div>
    </div>
  )
}

export default Footer
