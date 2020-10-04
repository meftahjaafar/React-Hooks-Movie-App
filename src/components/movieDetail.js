import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import './Netflix.css'
import Rating from './rating';

export default class MovieCard extends Component {
    render() {
        const movieTitle =  this.props.match.params.title ;
        const movie = this.props.movies.filter(movie => {
            if (movie.title === movieTitle) {
                return movie;
            }
            return false;
        });

        return (
        <div className="card">
            <Rating movieRating={movie.rating}/>
            <img src={movie.picture} alt={movie.title} className="picture"/>
            <h2 className="title">{movie.title}</h2>
            <h4 className="date">{movie.date}</h4>
            <h4 className="description">{movie.description}</h4>
            <iframe width="420" height="315" src={movie.trailer}></iframe>
        </div>
    )
  }
}