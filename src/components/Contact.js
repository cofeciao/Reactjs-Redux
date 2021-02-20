import React, { Component } from 'react';
const Redirect = require("react-router-dom").Redirect;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }

    ischanged = (event) => {
        const target = event.target;
        const key = target.name;
        const value = target.value;
        this.setState({
           [key]: value
        });
    }

    submitForm = (event) => {
        this.setState({
            isRedirect:true
        })

        event.preventDefault();
    }

    render() {
        if(this.state.isRedirect == true){
            return <Redirect to={"/"} />
        }
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-1 text-center">Liên hệ với chúng tôi</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>

                <section className="mb-3">
                    <div className="container">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div className="row">
                        <div className="col-md-12 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action={"/lien-he"}  method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input onChange={(event) => this.ischanged(event)} type="text" id="name" name="fname" className="form-control"/>
                                            <label name="name" className="">Your name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input onChange={(event) => {this.ischanged(event)}} type="text" id="email" name="femail" className="form-control"/>
                                            <label name="email" className="">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input onChange={(event) => {this.ischanged(event)}} type="text" id="subject" name="fsubject" className="form-control"/>
                                            <label name="subject" className="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea onChange={(event) => {this.ischanged(event)}} type="text" id="message" name="fmessage" rows="2" className="form-control md-textarea"></textarea>
                                            <label name="message">Your message</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-md-left">
                                    <button type="submit" onClick={(event) => {this.submitForm(event)}} className="btn btn-primary">send</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Contact;