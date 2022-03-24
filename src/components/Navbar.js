import React from 'react';

import {addFromSearchMovie ,searchResult } from '../actions/index'


class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            searchValue : ""
        }
    }
     
    handleChange = (event) =>{
        console.log(event.target.value);
        this.setState({
            searchValue:event.target.value 
        })
    }
     
    handleAddToMovie = (movie) => {
        this.props.dispatch(addFromSearchMovie(movie))
    }
    render (){
        console.log('searchValue',this.state.searchValue);
        const {result,showNavBar } = this.props.search
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange = {this.handleChange}/>
                    <button id="search-btn"
                        onClick={() => this.props.dispatch(searchResult(this.state.searchValue))}>
                        Search
                    </button>

                    { showNavBar &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic" />

                                <div className="movie-info">
                                   <span>{result.Title} ({result.Year })</span>
                                <span style={{ fontSize: 15 }}>{result.Plot}</span>
                                <span style={{ fontSize: 15 }}>{ result.imdbRating}</span>
                                    <button onClick={() => this.handleAddToMovie(result)}>
                                    Add To Movie
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}


export default Navbar;