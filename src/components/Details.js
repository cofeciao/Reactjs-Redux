import React, { Component } from 'react';
import dl from './dulieu.json';
class details extends Component {
    render() {
        return (
            <div>
                    <header class="masthead tintuc">
                        <div class="container h-100">
                            <div class="row h-100">
                                <div class="col-lg-12 my-auto">
                                    <div class="header-content mx-auto">
                                        <h1 class="mb-1 text-center">Trang chi tiết tin</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
{/*begin news details*/}
                {
                    dl.map((value,key) => {
                        if (value.id == this.props.match.params.id){
                            return (
                                <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                        <img src={value.anh} className="img-fluid" alt=""/>
                                        <h1 className="display-5 text-center">{value.tieude}</h1>
                                        <p className="lead">{value.id}</p>
                                        <hr className="my-2"/>
                                        <p>
                                            {value.noidung}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <hr/>
{/*end news details*/}

                    <div class="container">
                        <div class="row mt-3">
                            <div class="col-12 text-center">Tin Liên Quan</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-3">
                                <div class="card border-primary">
                                <a href="/tin-chi-tiet"><img class="card-img-top" src="http://placehold.it/100px50/" alt=""/></a>
                                <div class="card-body">
                                    <h4 class="card-title">Tin 1</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                </div>
                                </div> <hr/>
                            </div>
                            <div class="col-3">
                                <div class="card border-primary">
                                <a href="/tin-chi-tiet"><img class="card-img-top" src="http://placehold.it/100px50/" alt=""/></a>
                                <div class="card-body">
                                    <h4 class="card-title">Tin 1</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                </div>
                                </div> <hr/>
                            </div>
                            <div class="col-3">
                                <div class="card border-primary">
                                <a href="/tin-chi-tiet"><img class="card-img-top" src="http://placehold.it/100px50/" alt=""/></a>
                                <div class="card-body">
                                    <h4 class="card-title">Tin 1</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                </div>
                                </div> <hr/>
                            </div>
                            <div class="col-3">
                                <div class="card border-primary">
                                <a href="/tin-chi-tiet"><img class="card-img-top" src="http://placehold.it/100px50/" alt=""/></a>
                                <div class="card-body">
                                    <h4 class="card-title">Tin 1</h4>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                </div>
                                </div> <hr/>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}
export default details;