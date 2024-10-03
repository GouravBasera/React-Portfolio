import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className='mt-20 w-[80%] flex h-screen mx-auto'>
        <div className='w-[50%]'>
          <h2 className='text-white bebas text-[4.5rem]'>LET'S CONNECT</h2>
          <p className='text-[#C7C7C7] text-lg'>Say hello at <span className='text-decoration-line: underline'><a href="mailto:gouravbasera06@gmail.com">Gouravbasera06@gmail.com</a></span></p>
          <p className='text-[#C7C7C7] text-lg' >For more info, here's my <span className='text-decoration-line: underline'>resume</span></p>
          <FontAwesomeIcon icon={faGithub} style={{color: "#D3E97A"}}/>
          <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#D3E97A"}} />
          <FontAwesomeIcon icon={faXTwitter} style={{color: "#D3E97A"}} />
          <FontAwesomeIcon icon={faInstagram} style={{color: "#D3E97A"}} />
          <p className='text-[#C7C7C7]'>© 2023 Robert Garcia</p>
        </div>
        <div className='w-[50%] text-[#C7C7C7]'>
          <form className='flex flex-col gap-y-2'>
            <label htmlFor="name">Name</label>
            <input className='mb-6' type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input className='mb-6' type="text" id='email'/>
            <label htmlFor="subject">Subject</label>
            <input className='mb-6' type="text" id='subject'/>
            <label htmlFor="message">Message</label>
            <input className='mb-6 h-[156px]' type="text" id='message'/>
            <div className='w-36 bg-[#D3E97A] flex justify-center items-center manrope text-[#0A0A0A] rounded-full font-bold h-14'>SUBMIT</div>
          </form>
        </div> 
      </div>
    </>
  )
}