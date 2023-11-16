import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import './Contact.css';

const Contact = ({ state }) => {
    const [resume, setResume] = useState("");
    useEffect(() => {
        const { contract } = state;
        const resumeDetails = async () => {
            const resumeCid = await contract.methods.resumeLink().call();
            setResume("https://gateway.pinata.cloud/ipfs/" + resumeCid);
        };
        contract && resumeDetails();
    }, [state]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        emailjs
            .send(
                'service_cbg9k4g',
                'template_o6moybq',
                {
                    from_name: formData.name,
                    to_name: 'Mihir Vishwakarma',
                    from_email: formData.email,
                    to_email: 'vishwakarmamihir@gmail.com',
                    message: formData.message,
                },
                '8FdkE-_CYHMVukr1M'
            )
            .then(
                () => {
                    alert("Thank you. I will get back to you as soon as possible.");
                    setFormData({
                        name: "",
                        email: "",
                        message: ""
                    });
                },
                (error) => {
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <motion.button
                    className="downloadBTN"
                    whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" }}
                >
                    View Resume :)
                </motion.button>
            </a>
            <p>
                <br />
                <motion.h1
                    className="title"
                    whileHover={{ scale: 1.05, color: "#007bff" }}
                >
                    Still Alive?
                    Dosti ka haath badhana ho toh fill the below form 🗿!
                </motion.h1>
            </p>
            <br />

            <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-group">
                    <label htmlFor="name">NAME:</label>
                    <motion.input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-MAIL:</label>
                    <motion.input
                        type="email"
                        placeholder="Mail Address"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">MESSAGE:</label>
                    <motion.textarea
                        id="message"
                        name="message"
                        placeholder="Enter Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        whileFocus={{ scale: 1.05, borderColor: "#007bff" }}
                    />
                </div>
                <div className="form-group">
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05, backgroundColor: "#007bff" }}
                    >
                        SUBMIT
                    </motion.button>
                </div>
            </form>
        </motion.section>
    );
}

export default Contact;
