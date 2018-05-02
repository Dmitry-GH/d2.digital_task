import React, { Component } from 'react';

export default class Modal extends Component{
    render(){

        if(!this.props.show) {
            return null;
        }

        return(
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content">
                <div className="card">
                {/* <div className="card-image">
                    <figure className="image">
                        <img src={'https://image.tmdb.org/t/p/w500'} alt=""/>
                    </figure>
                </div> */}
                <div className="card-content">
                    <div className="media">
                    <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                    </div>
            </div>
                </div>
                <button onClick={this.props.onClose} className="modal-close is-large" aria-label="close"></button>
            </div>
        );
    }
}