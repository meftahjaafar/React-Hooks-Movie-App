import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Netflix from './components/Netflix.js';
import MovieShow from './components/movirShow';
import picture1 from './assets/Popular on Netflix/p1.PNG';
import picture2 from './assets/Popular on Netflix/p2.PNG';
import picture3 from './assets/Popular on Netflix/p3.PNG';
import picture4 from './assets/Popular on Netflix/p4.PNG';
import picture5 from './assets/Popular on Netflix/p5.PNG';
import picture6 from './assets/Popular on Netflix/p6.PNG';
import picture7 from './assets/Popular on Netflix/p7.PNG';
import picture8 from './assets/Popular on Netflix/p8.PNG';
import picture9 from './assets/Popular on Netflix/p9.PNG';
import picture10 from './assets/Popular on Netflix/p10.PNG';
import picture11 from './assets/Popular on Netflix/p11.PNG';
import picture12 from './assets/Popular on Netflix/p12.PNG';



class App extends Component {
 
   constructor(props) {
    super(props);
    this.state = {
      movies : [
         {
           picture: picture1 ,
           title: 'The Road Trick',
           date: '2017',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture2 ,
           title: 'Wynonna Earp',
           date: '2016',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture3 ,
           title: 'Club De Cuervos',
           date: '2015',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture4 ,
           title: 'Greys Anatomy',
           date: '2005',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture5 ,
           title: 'The Streets Step Up 2',
           date: '2008',
           rating: 3,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture6 ,
           title: 'Liquid Science',
           date: '2017',
           rating: 1,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture7 ,
           title: '13 Reasons Why',
           date: '2017',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture8 ,
           title: 'The StairCase',
           date: '2018',
           rating: 4,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture9 ,
           title: 'The Vietnam War',
           date: '2020',
           rating: 3,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture10 ,
           title: 'The Cavenant',
           date: '2020',
           rating: 2,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture11 ,
           title: 'Marcella',
           date: '2014',
           rating: 5,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
         {
           picture: picture12 ,
           title: 'Riverdale',
           date: '2016',
           rating: 1,
           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut congue metus. Donec vitae sem sed leo rutrum rhoncus aliquet et lorem. Donec aliquam accumsan vehicula. Quisque venenatis laoreet nunc, sodales elementum orci vulputate ut. Maecenas convallis orci eget quam egestas finibus. Nullam eleifend ex nisl, molestie blandit orci tincidunt eget. Aliquam tempus libero in interdum interdum. Mauris quis eleifend augue. Donec molestie finibus nisi. Duis aliquet eros ut lacus tristique semper.",
           trailer: "https://www.youtube.com/watch?v=uvbavW31adA",
         },
       ]
     };
  }

  render() {
    return (
 
      <Switch>
          <Route exact path="/" render={(props)=><Netflix {...props} movies={this.state.movies}/>} />
          <Route exact path="/movies/:title" render={(props)=><MovieShow {...props} movies={this.state.movies}/>} />
      </Switch>

    );
  }
}

export default App;


