import React, { Component } from 'react';


export default class FilmCard extends Component {
      
    render() {
        const toggleModal = this.props.toggleModal;
        const array = this.props.array;

        const cards = array.map((el, index) => 
            <div className="column is-one-quarter" key={index}>
                <div className="box" onClick={toggleModal.bind(this)}>
                    <img src={'https://image.tmdb.org/t/p/w500'+el.poster_path} className="image" alt=''/>
                    <div className="title is-5"> 
                        {el.title}
                    </div>
                    <div>
                        <div>
                            Adults only: {el.adult?<span className="tag is-danger">true</span>:<span className="tag is-success">false</span>}
                        </div>
                        <div>
                            Release_date: {el.release_date}
                        </div>
                    </div> 
                </div>
            </div>
            );
            
        return (
            <div className="FilmCard columns is-multiline is-mobile">
                {cards}
            </div>
        )
    }
}