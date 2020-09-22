import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>

                <header class="masthead tintuc">
                    <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-lg-12 my-auto">
                        <div class="header-content mx-auto">
                            <h1 class="mb-1 text-center">Liên hệ với chúng tôi</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>

                <section class="mb-3">
                    <div class="container">
                    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
                    <div class="row">
                        <div class="col-md-12 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="name" name="name" class="form-control"/>
                                            <label for="name" class="">Your name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="md-form mb-0">
                                            <input type="text" id="email" name="email" class="form-control"/>
                                            <label for="email" class="">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form mb-0">
                                            <input type="text" id="subject" name="subject" class="form-control"/>
                                            <label for="subject" class="">Subject</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                            <label for="message">Your message</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="text-center text-md-left">
                                <a class="btn btn-primary" >Send</a>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default Contact;