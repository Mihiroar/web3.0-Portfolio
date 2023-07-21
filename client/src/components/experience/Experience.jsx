import React, { useState, useEffect } from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"

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
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>

            <div className="container">

                {/* Education */}
                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education.length > 0 ? (
                        education.map((edu, index) => (
                            <div className="edu-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {edu.date}
                                </p>
                                <h3 className="card-text2">{edu.degree}</h3>
                                <p className="card-text3">{edu.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {edu.institutionName}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No education details found.</p>
                    )}
                </div>

                {/* Experience */}
                <div className="experience">
                    <h1 className="exp-title">Experience</h1>
                    {experience.length > 0 ? (
                        experience.map((exp, index) => (
                            <div className="exp-card" key={index}>
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {exp.date}
                                </p>
                                <h3 className="card-text2">{exp.post}</h3>
                                <p className="card-text3">{exp.knowledgeAcquired}</p>
                                <p className="card-text4">
                                    {exp.companyName}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No experience details found.</p>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Experience;
