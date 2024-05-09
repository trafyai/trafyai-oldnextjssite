'use client';

import React, { useState } from "react";
import '@styles/common/auth/Enquiry.css'


const EnquiryForm = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let errorMessage = "";
        switch (name) {
            case "fname":
            case "lname":
                const namePattern = /^[A-Za-z]+$/;
                errorMessage = !namePattern.test(value) ? "Should contain alphabetic characters only." : "";
                break;
            case "email":
                const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                errorMessage = !emailPattern.test(value) ? "Please enter a valid email address." : "";
                break;
            case "phone":
                const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                errorMessage = !phonePattern.test(value) ? "Please enter a valid phone number." : "";
                break;
            default:
                break;
        }

        setErrorMessages({ ...errorMessages, [name]: errorMessage });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fname, lname, email, phone, message } = formData;

        const newErrorMessages = {
            fname: !fname ? "Please enter your first name." : "",
            lname: !lname ? "Please enter your last name." : "",
            email: !email ? "Please enter your email address." : "",
            phone: !phone ? "Please enter your phone number." : "",
            message: "" // No validation for the message field
        };

        setErrorMessages(newErrorMessages);

        if (Object.values(newErrorMessages).some(message => message !== "")) {
            return;
        }

        // Proceed with form submission
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        try {
            const res = await fetch('https://courseenquiryform-default-rtdb.firebaseio.com/EnquiryFormData.json', options);
            if (res.ok) {
                alert("Thank You For Submitting the Form ");
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                alert("Error: " + res.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error: " + error.message);
        }
    };


    return (
        <main>
             {/* <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet> */}
            <div className="course-enquiry-form">
                <div className="course-enquiry-form-container">
                    <div className="course-enquiry-form-contents">

                        <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off" method="POST">
                            <div className="enquiryform-heading">
                                <h2>Ready to get started?</h2>
                            </div>

                            <div className="enquiryname">
                            <div className="enquiryfname">
                                {/* <label htmlFor="">First Name:</label> */}
                                <input type="text" placeholder="First Name" name="fname" className="enquiry-fname" required onChange={handleChange} value={formData.fname}  />
                                {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                            </div>
                            <div className="enquirylname">
                            {/* <label htmlFor="">Last Name:</label> */}
                                <input type="text" placeholder="Last Name" className="enquiry-lname" name="lname" required onChange={handleChange} value={formData.lname}  />
                                {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                            </div>
                            </div>

                            <div className="enquiryemail">
                                {/* <label htmlFor="">Email:</label> */}
                                <input type="email" placeholder="Email" required className="enquiry-email" name="email" onChange={handleChange} value={formData.email} />
                                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
                            </div>
                            <div className="enquiryphone">
                            {/* <label htmlFor="">Phone Number:</label> */}
                                <input type="tel" placeholder="Phone Number" required className="enquiry-phone" name="phone" onChange={handleChange} value={formData.phone} />
                                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                            </div>
                            <div className="enquirymessage">
                                {/* <label htmlFor="">Message:</label> */}
                                <textarea type="text" placeholder="Message" className="enquiry-message" name="message" style={{ width: "100%" }}  value={formData.message} onChange={handleChange} />
                            </div>

                            <button type="submit" className="course-enquiry-button">Get in touch</button>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default EnquiryForm;