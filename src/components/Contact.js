import React, { Fragment } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0jju24p', e.target, 'user_9bgbYOOen4ASGWnEAjSXi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <Fragment>
            <div className="contact my-5" id="contact" data-aos="zoom-in">
                <div className="container text-center">
                    <h1 className="text-center">Contact Me</h1>
                    <form onSubmit={sendEmail}>
                        <div className="row pt-5 mx-auto">
                            <div className="col-md-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="name" name="name" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <input type="email" className="form-control" placeholder="Email address" name="email" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                            </div>
                            <div className="col-md-8 form-group pt-2 mx-auto">
                                <textarea className="form-control" cols="30" rows="10" placeholder="your message" name="message"></textarea>
                            </div>
                            {/* <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="form-control" value="Send Message"/>
                            </div> */}
                        </div>
                        <button type="submit" className="btn btn-primary text-center">Send Message</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
