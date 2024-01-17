
// ContactUs.js

import React from 'react';
import "./ContactUs.css"
// Make sure to create a CSS file for your styles

const ContactUs = () => {
    return (
        <section id="section-wrapperss">
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
                            <span>Email:</span> <a href="mailto:info@yoursite.com">Utkala@yoursite.com</a>
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
                    <form action="/home" method="POST">
                        <h2 className="form-titles">Send us a message</h2>
                        <div className="form-fieldss">
                            <div className="form-groups">
                                <input type="text" className="fname" placeholder="First Name" />
                            </div>
                            <div className="form-groups">
                                <input type="text" className="lname" placeholder="Last Name" />
                            </div>
                            <div className="form-groups">
                                <input type="email" className="email" placeholder="Mail" />
                            </div>
                            <div className="form-groups">
                                <input type="number" className="phone" placeholder="Phone" />
                            </div>
                            <div className="form-groups">
                                <textarea name="message" id="" placeholder="Write your message"></textarea>
                            </div>
                        </div>
                        <input type="submit" value="Send Message" className="submit-buttons" />
                    </form>
                </div>
            </div>
        </section>
    );
}
export default ContactUs;