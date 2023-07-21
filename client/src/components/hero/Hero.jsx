import React, { useEffect, useState } from 'react';
import Typed from 'react-typed'; // Import the react-typed library
import { Modal, ModalBody, Row } from 'reactstrap';
import heroImg from '../../assets/hero-img.png';
import './Hero.css';

const Hero = ({ state }) => {
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState('');
  const [cid, setCid] = useState('');

  useEffect(() => {
    const { contract } = state;
    const descriptionAsync = async () => {
      const descriptionText = await contract.methods.description().call();
      setDescription(descriptionText);
    };
    contract && descriptionAsync();
  }, [state]);

  useEffect(() => {
    const { contract } = state;
    const cidOfImage = async () => {
      const cid = await contract.methods.imageLink().call();
      setCid(cid);
    };
    contract && cidOfImage();
  }, [state]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <span>Hey, this is</span>
          <p>
            <div>Mihir </div>A Full-Stack Blockchain Developer From India.
          </p>
          <h1>
            I Develop decentralized apps in web3 space and also a{' '}
            {/* Replace with Typed component */}
            <Typed
              strings={['Web Developer', 'BlockChain Developer', 'UI/UX Designer', 'Ethical Hacker']}
              typeSpeed={80}
              backSpeed={80}
              loop
              className='typed-text'
            />
          </h1>
          <h3>{description}</h3>
          {/* =========popup bootstrap========== */}
          <Modal size="md" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalBody>
              <Row className="text-align">
                <label htmlFor="" toggle={() => setModal(!modal)}>
                  Mail Id - vishwakarmamihir@gmail.com
                  <p></p>
                </label>
              </Row>
            </ModalBody>
          </Modal>
          <button className="msg-btn" onClick={() => setModal(true)}>
            Get in Touch
          </button>
          {/* =========popup bootstrap end========== */}
        </div>
        <div className="hero-img">
          <div className="img-container">
            <img src={`https://gateway.pinata.cloud/ipfs/${cid}`} alt="profilePhoto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
