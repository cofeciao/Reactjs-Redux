import React, { Component } from 'react';

class home extends Component {
    render() {
        return (
            <div>
            <header class="masthead">
                <div class="container h-100">
                <div class="row h-100">
                    <div class="col-lg-7 my-auto">
                    <div class="header-content mx-auto">
                        <h1 class="mb-5">Tên mình là Cao Minh, Chào mừng đến với Blog của mình !</h1>
                        <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Mình là ai? <br/> Click vào sẽ biết thôi</a>
                    </div>
                    </div>
                    <div class="col-lg-5 my-auto">
                    <div class="device-container">
                        <div class="device-mockup iphone6_plus portrait white">
                        <div class="device">
                            <div class="screen">
                            <img src="https://www.techprevue.com/wp-content/uploads/2018/04/create-a-free-blog-on-blogspot.jpg" class="img-fluid" alt=""/>
                            </div>
                            <div class="button">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            <section class="download bg-primary text-center" id="download">
                <div class="container">
                <div class="row">
                    <div class="col-md-8 mx-auto">
                    <h2 class="section-heading">Một Developer chập chững thôi không có gì nổi bật</h2>
                    <p>Ngoài ra cũng là một kẻ yêu động vật, à mà còn hài hước đầy mộng mơ và thú vị</p>
                    <div class="badges">
                        <a class="badge-link" href="#"><img src="img/google-play-badge.svg" alt=""/></a>
                        <a class="badge-link" href="#"><img src="img/app-store-badge.svg" alt=""/></a>
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