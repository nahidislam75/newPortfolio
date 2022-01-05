import React from 'react';
import data from '../FakeData/dataBlog';
import { useState } from 'react';
import Cards from '../Cards/Cards';
import { Col, Row } from 'react-bootstrap';
import "./Blog.css";

const Blog = () => {
    const newData= data;
    // console.log(newData);
    const [blogs,setBlog]= useState(newData);
    return (
        <div className='blogPadding'>
            <Row>
            {
                blogs.map(blogs=><Col> <Cards blogs={blogs}></Cards></Col>)
            }
            </Row>
        </div>
    );
};

export default Blog;