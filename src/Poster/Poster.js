import React from 'react';
import { Col, Row ,Button } from 'react-bootstrap';
import './Poster.css';
import img1 from '../Image/IMG_20200918_124916.jpg'

const Poster = () => {
    return (
        <div style={{ 
            // backgroundImage: Image(img1)
            }}>
            <Row>
                <Col className='middling'>
                <h6 className='wordColor'>Welcome to my world</h6>
                <h1 className='wordColor'>Hi, This is Mokadderul Islam</h1>
                <div className='box2 word'>
                    <span>JS Developer</span>
                    <span>React Developer</span>
                    <span>MERN Developer</span>
                    <span>Jr. Web Developer</span>
                    <span>UI Degine</span>
                </div>
                <div className='ok'>
                <Button variant="outline-info"> <a href="https://drive.google.com/drive/u/0/my-drive" className='removeUnderline' >Resume</a></Button>
                </div>
                </Col>
                <Col><img className='picSize' src={img1} alt="" /></Col>
            </Row>
        </div>
    );
};

export default Poster;