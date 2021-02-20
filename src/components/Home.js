import React, { Component } from 'react';

class home extends Component {
    render() {
        return (
            <div>
            <header className="masthead">
                <div className="container h-100">
                <div className="row h-100">
                    <div className="col-lg-7 my-auto">
                    <div className="header-content mx-auto">
                        <h1 className="mb-5">Lorem</h1>
                        <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Alo? <br/> Click vào sẽ biết thôi</a>
                    </div>
                    </div>
                    <div className="col-lg-5 my-auto">
                    <div className="device-container">
                        <div className="device-mockup iphone6_plus portrait white">
                        <div className="device">
                            <div className="screen">
                            <img src="https://www.techprevue.com/wp-content/uploads/2018/04/create-a-free-blog-on-blogspot.jpg" className="img-fluid" alt=""/>
                            </div>
                            <div className="button">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            <section className="download bg-primary text-center" id="download">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                    <h2 className="section-heading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2>
                    <p>
                        Ab, ad amet animi atque debitis doloremque esse ex id in maiores modi mollitia obcaecati odit perferendis qui similique tempore veritatis voluptatibus!
                    </p>
                    <div className="badges">
                        <a className="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""/></a>
                        <a className="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""/></a>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        );
    }
}

export default home;