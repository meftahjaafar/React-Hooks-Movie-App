import React, { Component } from 'react'
import MovieList from './movieList';
//import SearchMovie from './searchMovie';
import SearchRating from './searchRating';
import picture1 from '../assets/Popular on Netflix/p1.PNG';
import picture2 from '../assets/Popular on Netflix/p2.PNG';
import picture3 from '../assets/Popular on Netflix/p3.PNG';
import picture4 from '../assets/Popular on Netflix/p4.PNG';
import picture5 from '../assets/Popular on Netflix/p5.PNG';
import picture6 from '../assets/Popular on Netflix/p6.PNG';
import picture7 from '../assets/Popular on Netflix/p7.PNG';
import picture8 from '../assets/Popular on Netflix/p8.PNG';
import picture9 from '../assets/Popular on Netflix/p9.PNG';
import picture10 from '../assets/Popular on Netflix/p10.PNG';
import picture11 from '../assets/Popular on Netflix/p11.PNG';
import picture12 from '../assets/Popular on Netflix/p12.PNG';
import logo from '../assets/logo/logo.PNG'
import './Netflix.css';

// ----------Data-------------//

const movies = [
    {
      picture: picture1 ,
      title: 'The Road Trick',
      date: '2017',
      rating: 4
    },
    {
      picture: picture2 ,
      title: 'Wynonna Earp',
      date: '2016',
      rating: 5
    },
    {
      picture: picture3 ,
      title: 'Club De Cuervos',
      date: '2015',
      rating: 4
    },
    {
      picture: picture4 ,
      title: 'Greys Anatomy',
      date: '2005',
      rating: 5
    },
    {
      picture: picture5 ,
      title: 'The Streets Step Up 2',
      date: '2008',
      rating: 3
    },
    {
      picture: picture6 ,
      title: 'Liquid Science',
      date: '2017',
      rating: 1
    },
    {
      picture: picture7 ,
      title: '13 Reasons Why',
      date: '2017',
      rating: 5
    },
    {
      picture: picture8 ,
      title: 'The StairCase',
      date: '2018',
      rating: 4
    },
    {
      picture: picture9 ,
      title: 'The Vietnam War',
      date: '2020',
      rating: 3
    },
    {
      picture: picture10 ,
      title: 'The Cavenant',
      date: '2020',
      rating: 2
    },
    {
      picture: picture11 ,
      title: 'Marcella',
      date: '2014',
      rating: 5
    },
    {
      picture: picture12 ,
      title: 'Riverdale',
      date: '2016',
      rating: 1
    },
  ]

  export default class Netflix extends Component {
    // ------------ Constructor ------------ //
    constructor(props) {
      super(props)
      this.state = {
        movieadded: movies,
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
   /* SearchRating = ({ rate, starClicked }) => {
        return (
            <div>
                {Array.from({ length: 5 }, (star, i) => (
                    <span onClick={() => { starClicked(i + 1) }}>
                        {i < rate ? "★" : "☆"}
                    </span>
                ))}
            </div>
        );
    }
    { this.SearchRating(this.state.stars, this.rater) } 
    */

    // ------------ Rendering ------------ //
    render() {
      return (
  
        <div class="wrapper">

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