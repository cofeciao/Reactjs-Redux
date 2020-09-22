import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';
class news extends Component {
    render() {
        return (
            <div>
                <header class="masthead tintuc">
                    <div class="container h-100">
                        <div class="row h-100">
                            <div class="col-lg-12 my-auto">
                                <div class="header-content mx-auto">
                                    <h1 class="mb-1 text-center">Trang danh sách tin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div class="container">
                    <div class="row mt-3">
                        {
                            dl.map((value,key) => {
                               return (
                                    <NewsItem  tinid={value.id} anh={value.anh} tieude={value.tieude} trichdan={value.trichdan}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default news;