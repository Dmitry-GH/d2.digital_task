import React, { Component } from 'react';

export default class Hero extends Component{
    render() {
        return(
            <section className="hero is-primary is-small">
                
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container is-fluid">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                            Home
                            </a>
                            <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroA" className="navbar-menu">
                            <div className="navbar-end">

                                <span className="navbar-item ">
                                    <input className="input" type="text" placeholder="Search"/>
                                </span>
                                <span className="navbar-item">
                                    <a className="button is-primary is-inverted">
                                        <span>Search</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    </nav>
                </div>

                
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className="title">
                        D2.digital films db
                    </h1>
                    <h2 className="subtitle">
                        Test task from Dmitry Rudiuk
                    </h2>
                    </div>
                </div>

                
                {/* <div className="hero-foot">
                    <nav className="tabs">
                    <div className="container">
                        <ul>
                        <li className="is-active"><a>Overview</a></li>
                        <li><a>Modifiers</a></li>
                        <li><a>Grid</a></li>
                        <li><a>Elements</a></li>
                        <li><a>Components</a></li>
                        <li><a>Layout</a></li>
                        </ul>
                    </div>
                    </nav>
                </div> */}
            </section>
        );
    }
}