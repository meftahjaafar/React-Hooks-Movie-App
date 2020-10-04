import React, { Component } from 'react'
 import {Route} from 'react-router-dom';
import MovieList from './movieList';
import SearchRating from './searchRating';
import './Netflix.css';
import logo from '../assets/logo/logo.PNG'
import MovieShow from './movirShow'



export default class Netflix extends Component {
    // ------------ Constructor ------------ //
    constructor(props) {
      super(props)
      this.state = {
        movieadded: props.movies,
        match: props.match,
        picture: '',
        title: '',
        date: '',
        rating: '',
        searchText: '',
        stars: 0
      }
    }

    // ------------ Functions ------------ //
    
    changeInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    newMovie = () => {
      this.setState({
        movieadded: [
          ...this.state.movieadded,
          {
            picture: this.state.picture,
            title: this.state.title,
            date: this.state.date,
            rating: this.state.rating
          }],
      })
    }
    searchMovie = (e) => {
      this.setState({
        searchText: e.target.value
      })
    }
    rater = (clicked) => {
      this.setState({
        stars: clicked
      })
    }


    // ------------ Rendering ------------ //
    render() {
      return (
        <div to="/" class="wrapper">
          <header>
          <div class="netflixLogo">
           <a id="logo" href="#home">
             <img src= { logo } alt="Logo Image" />
           </a>
           </div>
           <nav class="main-nav">
           <a href="#home">Home</a>
           <a href="#tvShows">TV Shows</a>
           <a href="#movies">Movies</a>
           <a href="#originals">Originals</a>
           <a href="#">Recently Added</a>
           <a target="_blank" href="https://codepen.io/meftahjaafar">Portfolio</a>
           </nav>
           <p class="search-rate">
              <SearchRating rate={this.state.stars} starClicked={this.rater} />
            </p>
           <p class="search-title">
               <input placeholder="Filter your Movie" className="search" onChange={this.searchMovie} />
               <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
           </p>
           <nav class="sub-nav">
           <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
           <a href="#">Account</a>        
           </nav>
          </header>
          <section class="main-container" >
          <div class="location" id="home">
          <h1 id="home">Popular on Netflix</h1>
          <div class="list">
          <MovieList list={this.state.movieadded.filter(movie => movie.rating >= this.state.stars).filter(el => el.title.toLowerCase().includes(this.state.searchText.toLowerCase()))} change={this.changeInput} new={this.newMovie} rating={this.state.rating} />
          <Route path={`${this.state.match.url}/:movietitle`} render={routerProps => <MovieShow  {...routerProps} movies={this.state.movieadded} /> }/>

          </div>
          </div>
        
          <section class="link">
          <div class="logos">
          <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
          <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
          <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
          <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
         </div>
         <div class="sub-links">
          <ul>
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
          </ul>
         </div>
         </section>
         <footer>
          <p>Copyright 2020 Netflix, Inc.</p>
          <p>Meftah Jaâfer</p>
         </footer>
         </section>
          
         </div>
      )
    }
  }