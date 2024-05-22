'use client';

import { useState, useEffect } from 'react';
import '@styles/common/auth/Enquiry.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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

    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();

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
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
                axios.post("http://localhost:5002/course-enquiry/submit", { email},{ timeout: 10000 })
                .then(response => {
                    console.log(response.data);
                    window.alert("Thank you for submitting the form.");
                    setFormSubmitted(true); // Set formSubmitted to true to trigger navigation
                })
                .catch(error => {
                    console.error(error);
                    alert("An error occurred while sending the email notification.");
                });

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

    useEffect(() => {
        if (formSubmitted) {
            router.push('/courses/uiux-course');
            setFormSubmitted(false); // Reset formSubmitted to false for future submissions
        }
    }, [formSubmitted, router]);

    return (
        <main>
            <div className="course-enquiry-form">
                <div className="course-enquiry-form-container">
                    <div className="course-enquiry-form-contents">
                        <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off" method="POST">
                            <div className="enquiryform-heading">
                                <h2>Ready to get started?</h2>
                            </div>
                            <div className="enquiryname">
                                <div className="enquiryfname">
                                    <input type="text" placeholder="First Name" name="fname" className="enquiry-fname" required onChange={handleChange} value={formData.fname} />
                                    {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                                </div>
                                <div className="enquirylname">
                                    <input type="text" placeholder="Last Name" className="enquiry-lname" name="lname" required onChange={handleChange} value={formData.lname} />
                                    {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                                </div>
                            </div>
                            <div className="enquiryemail">
                                <input type="email" placeholder="Email" required className="enquiry-email" name="email" onChange={handleChange} value={formData.email} />
                                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
                            </div>
                            <div className="enquiryphone">
                                <input type="tel" placeholder="Phone Number" required className="enquiry-phone" name="phone" onChange={handleChange} value={formData.phone} />
                                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                            </div>
                            {/* <div className="enquirycourse">
                                <input type="text" placeholder="Course Name " required className="enquiry-course" name="course" onChange={handleChange} value={formData.course} />
                                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                            </div> */}
                            <div className="enquirymessage">
                                <textarea type="text" placeholder="Message" className="enquiry-message" name="message" style={{ width: "100%" }} value={formData.message} onChange={handleChange} />
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