import React from 'react';
import './Handles.css';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a
        href='https://www.linkedin.com/in/mihir-vishwakarma-7973b5179/'
        target='_blank'
        rel='noopener noreferrer'
        title='LinkedIn'
      >
        <AiFillLinkedin className='icon linkedin' />
      </a>
      <a
        href='https://twitter.com/MihirSharma472/'
        target='_blank'
        rel='noopener noreferrer'
        title='Twitter'
      >
        <AiFillTwitterSquare className='icon twitter' />
      </a>
      <a
        href='https://github.com/Mihiroar/'
        target='_blank'
        rel='noopener noreferrer'
        title='GitHub'
      >
        <AiFillGithub className='icon github' />
      </a>
      <a
        href='https://www.instagram.com/mihirrrrrrrrr_/'
        target='_blank'
        rel='noopener noreferrer'
        title='Instagram'
      >
        <FaInstagramSquare className='icon instagram' />
      </a>
    </section>
  );
};

export default Handles;
