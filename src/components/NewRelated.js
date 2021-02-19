import React, {Component} from 'react';

class NewRelated extends Component {
    render() {
        return (
                    <div className="card border-primary">
                        <a href="/tin-chi-tiet"><img className="card-img-top" src={this.props.anh}
                                                     alt=""/></a>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.tieuDe}</h4>
                            <p className="card-text">
                                {this.props.trichDan}
                            </p>
                        </div>
                    </div>
        );
    }
}

export default NewRelated;