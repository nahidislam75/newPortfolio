import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Poster.css';
import img1 from '../Image/IMG_20200918_124916.jpg'

const Poster = () => {
    return (
        <div style={{ 
            // backgroundImage: Image(img1)
            }}>
            <Row>
                <Col className='middling'>
                <h6>Welcome to my world</h6>
                <h1>Hi, This is Mokadderul Islam</h1>
                <div className='box2 word'>
                    <span>JS Developer</span>
                    <span>React Developer</span>
                    <span>MERN Developer</span>
                    <span>Jr. Web Developer</span>
                    <span>UI Degine</span>
                </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Poster;