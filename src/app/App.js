import React, { Component } from 'react';

import Hero from "./components/Hero";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";
import FilmCard from "./components/FilmCard";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            currentPage: 1,
            error: null,
            isLoaded: false,
            items: {}
        };
    }
  
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });        
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22")
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
        const { error, isLoaded, items } = this.state;        
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (            
                <div className="container">
                    
                    <Hero />

                    <FilmCard array={items} toggleModal={this.toggleModal}/>
    
                    <Pagination state={this.state}/>
    
                    <Modal show={this.state.isModalOpen} onClose={this.toggleModal}/>
    
                </div>
            );
        }

        
    }
}

export default App;