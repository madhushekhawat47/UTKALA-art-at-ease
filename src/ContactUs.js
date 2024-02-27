import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast directly
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling (optional)
import emailjs from 'emailjs-com';
import "./ContactUs.css"
const ContactUs = () => {
    const [formData, setFormData] = useState({
        FName: '',
        LName: '',
        Email: '',
        Number: '',
        message: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm('service_zdlll53', 'template_gtu882b', event.target, 'kzdZGou0ZLK3wQVm4')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.text);
                    toast.success('Message sent successfully!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        toastStyle: {
                            backgroundColor: '#1f2d3c',
                            color: '#fff',
                        },
                    });
                    setFormData({ FName: '', LName: '', Email: '', Number: '', message: '' }); // Reset form data
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('There was an error sending your message.', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        toastStyle: {
                            backgroundColor: '#d9534f',
                            color: '#fff',
                        },
                    });
                }
            );
    };


    return (
        <section id="section-wrapperss">
            <ToastContainer />

            <div className="box-wrapperss">
                <div className="info-wrapss">
                    <h2 className="info-titless">Contact Information</h2>
                    <h3 className="info-sub-titless">Fill up the form and our Team will get back to you within 24 hours</h3>
                    <ul className="info-detailsss">
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                        </li>
                        <li>
                            <i className="fas fa-paper-plane"></i>
                            <span>Email:</span> <a href="mailto:info@yoursite.com">utkala@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-globe"></i>
                            <span>Website:</span> <a href="/home">yoursite.com</a>
                        </li>
                    </ul>
                    <ul className="social-iconss">
                        <li><a href="/home"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="/home"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/home"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>

                <div className="form-wrapss">
                    <form onSubmit={sendEmail} action="/home" method="POST">
                        <h2 className="form-titles">Send us a message</h2>
                        <div className="form-fieldss">
                            <div className="form-groups">
                                <input type="text" name="FName" value={formData.FName} onChange={handleChange} className="fname" placeholder="First Name" required />
                            </div>
                            <div className="form-groups">
                                <input type="text" name="LName" value={formData.LName} onChange={handleChange} className="lname" placeholder="Last Name" required />
                            </div>
                            <div className="form-groups">
                                <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="email" placeholder="Mail" required />
                            </div>
                            <div className="form-groups">
                                <input type="number" name="Number" value={formData.Number} onChange={handleChange} className="phone" placeholder="Phone (Optional)" />
                            </div>
                            <div className="form-groups">
                                <textarea name="message" id="" placeholder="Write your message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                        </div>
                        <button type="submit" value="Send Message" className="submit-buttons">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
