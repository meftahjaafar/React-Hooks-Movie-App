import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import Rating from './rating';
import './Netflix.css';
import logo from '../assets/logo/logo.PNG';

const MovieShow = ({ movies}) => {
  const {title} = useParams();
  var movie = movies.find(p => p.title == title);
  var movieTrailer;
  if (movie)
  movieTrailer = (
      <div className="movieshow">
          <Rating movieRating={movie.rating}/>
          <img src={movie.picture} alt={movie.title} className="picture"/>
          <h2 className="title">{movie.title}</h2>
          <h4 className="date">{movie.date}</h4>
          <h4 className="description">{movie.description}</h4>

          <ReactPlayer url={movie.trailer} />
      </div>
  );
else movieTrailer = (<h2> Sorry. Movie doesn't exist </h2>) ;
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

         <nav class="sub-nav">
         <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
         <a href="#">Account</a>        
         </nav>
        </header>
        <section class="main-container" >
        <div class="location" id="home">
        <h1 id="home">{title}</h1>
        <div>
        {movieTrailer}
        </div>
          <Link to="/">Previous</Link>
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
    );
  }
  

export default MovieShow;
