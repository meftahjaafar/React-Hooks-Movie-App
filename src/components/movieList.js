import React, { Component } from 'react';
import MovieCard from './movieCard';
import AddMovie from './addMovie';
import './movieList.css'
import {Link} from 'react-router-dom'


export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    addOne = (e) => {
        this.setState({
            visible: true
        })
    }
    close = (e) => {
        this.setState({
            visible: false
        })
    }

    render() {
        return (        
            <div>
                <div className="list">
                    {this.props.list.map(el => (
                        <Link  key={el.title} to={`/movies/${el.title}`}><MovieCard movie={el} key={el.title} /></Link>
                    ))}
                    <AddMovie onAdd={this.addOne} />
                </div>
                <div className="modal" style={{ display: (this.state.visible) ? 'flex' : 'none' }}>
                    <p>Picture</p>
                    <input type="text" name="picture" onChange={this.props.change}/>
                    <p>Rating</p>
                    <input type="text" name="rating" onChange={this.props.change} value={this.props.rating}/>
                    <p>Title</p>
                    <input type="text" name="title" onChange={this.props.change}/>
                    <p>Date</p>
                    <input type="text" name="date" onChange={this.props.change}/>
                    
                    <div>
                        <input type='button' onClick={() => {
                            if (this.props.rating.match(/[0-5]/g)) {
                                this.props.new()
                                this.close()}  
                            else
                            return alert('Please enter a valid rating')
                        }} value='Add' />
                        <input type='button' onClick={this.close} value='Close' />
                    </div>
                </div>
            </div>
        )
    }
}