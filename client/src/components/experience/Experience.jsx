// Experience.jsx

import React, { useState, useEffect } from "react";
import './Experience.css';
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Experience = ({ state }) => {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const { contract } = state;

        // Function to fetch education details
        const fetchEducationDetails = async () => {
            const educationDetails = await contract.methods.getAllEducationDetails().call();
            setEducation(educationDetails);
        }

        // Function to fetch experience details
        const fetchExperienceDetails = async () => {
            const experienceDetails = await contract.methods.allExperienceDetails().call();
            setExperience(experienceDetails);
        }

        contract && fetchEducationDetails();
        contract && fetchExperienceDetails();
    }, [state]);

    return (
        <motion.section
            className="exp-section"
            initial={{ opacity: 0, y: -20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on component mount
            exit={{ opacity: 0, y: -20 }} // Animation on component unmount
        >
            <motion.h1
                className="title"
                whileHover={{ scale: 1.05, color: "#007bff" }} // Scale and color change on hover
            >
                Experience && Education.
            </motion.h1>

            <motion.div
                className="container2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
            >

                {/* Education */}
                <div className="education">
                    <h1 className="edu-title">Education.</h1>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <motion.div
                                className="edu-card"
                                key={index}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                            >
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {edu.institutionName}
                                </p>
                            </motion.div>
                        ))
                    ) : (
                        <p>No education details found.</p>
                    )}
                </div>

                {/* Experience */}
                <div className="experience">
                    <h1 className="exp-title">Experience.</h1>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <motion.div
                                className="exp-card"
                                key={index}
                                whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                            >
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {exp.date}
                                </p>
                                <h3 className="card-text2">{exp.post}</h3>
                                <p className="card-text3">{exp.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {exp.companyName}
                                </p>
                            </motion.div>
                        ))
                    ) : (
                        <p>No experience details found.</p>
                    )}
                </div>

            </motion.div>
        </motion.section>
    )
}

export default Experience;
