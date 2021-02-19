import React, { Component } from 'react';
import dl from './dulieu.json';
import NewRelated from "./NewRelated";
class details extends Component {
    render() {
        console.log(dl[5]);
        return (
            <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 my-auto">
                                    <div className="header-content mx-auto">
                                        <h1 className="mb-1 text-center">Trang chi tiết tin</h1>
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
                                <div className="jumbotron jumbotron-fluid" key={key}>
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
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 text-center">Tin Liên Quan</div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                                {

                                    dl.map((value,key) => {

                                        if (value.id != this.props.match.params.id){
                                            if (key <= 3){
                                                return (
                                                    <NewRelated key={key} tinId={value.id} anh={value.anh} tieuDe={value.tieude} trichDan={value.trichdan} />
                                                )
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default details;