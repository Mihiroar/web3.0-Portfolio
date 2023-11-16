import React from 'react';
import './Skills.css';

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills That Spark My Tech Passion!!</h2>
      <div className="skills-container">
        <div className="skill-item">
          <img src={react} alt="React Icon" />
          <p>React.js</p>
        </div>
        <div className="skill-item">
          <img src={btc} alt="Bitcoin Icon" />
          <p>Blockchain (Bitcoin)</p>
        </div>
        <div className="skill-item">
          <img src={eth} alt="Ethereum Icon" />
          <p>Ethereum Smart Contracts</p>
        </div>
        <div className="skill-item">
          <img src={truffle} alt="Truffle Icon" />
          <p>Truffle Framework</p>
        </div>
        <div className="skill-item">
          <img src={gns} alt="GNS Icon" />
          <p>Decentralized Systems (GANACHE)</p>
        </div>
        <div className="skill-item">
          <img src={polygon} alt="Polygon Icon" />
          <p>Polygon (MATIC)</p>
        </div>
        <div className="skill-item">
          <img src={node} alt="Node.js Icon" />
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
