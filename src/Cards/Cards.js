import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
      <div className='container'>
        <Card style={{ border:'none'}}>
        <div className="box">
          <span></span>
          <div className="content">
            <h2>Card {this.props.blogs.id}</h2>
            <p>{this.props.blogs.title}</p>
            <a href={this.props.blogs.link}>Read More</a>
          </div>
        </div>
        </Card>
        
      </div>
    );
  }
}

export default Cards;
