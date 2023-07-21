import React from 'react'
import './Handles.css'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/mihir-vishwakarma-7973b5179/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/MihirSharma472/" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/Mihiroar/" target='_blank' rel="noopener noreferrer"><AiFillGithub className='icon' /></a>
      <a href="https://www.instagram.com/mihirrrroar/" target='_blank' rel="noopener noreferrer"><FaInstagramSquare className='icon' /></a>
    </section>
  )
}

export default Handles
