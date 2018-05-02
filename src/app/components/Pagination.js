import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FilmCard from "./FilmCard";

export default class Pagination extends Component{

    constructor(props) {
        super(props);

        this.state = {
            currentPage: this.props.state.currentPage
        }
    }

    changePage = (index) => {
        
        this.setState({
            currentPage: index
        });
        
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22&page=" + this.state.currentPage)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
                this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }
    

    render() {
        return(
            <nav className="pagination is-rounded is-centered" role="navigation" >
                <a className="pagination-previous">Previous</a>
                <a className="pagination-next" onClick={this.changePage.bind(this, this.state.currentPage + 1)}>Next page</a>
                <ul className="pagination-list">
                    <li><a className="pagination-link">1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" >45</a></li>
                    <li><a className="pagination-link is-current" aria-current="page">46</a></li>
                    <li><a className="pagination-link" >47</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" >86</a></li>
                </ul>
            </nav>
        );
    }
}