import { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // Correct import for emailjs library
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

    // State to manage the form fields
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any actions you want with the form data here
        console.log(formData);
        // Send email using emailjs library
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
                    // Clear the form after successful submission
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

    // Function to handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section className="contact-section">
            <h1 className="title">
                Still Alive?
                Dosti ka haath badhana ho toh fill the below form 🗿!
            </h1>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downloadBTN">
                    View Resume
                </button>
            </a>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder="Mail Address"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
