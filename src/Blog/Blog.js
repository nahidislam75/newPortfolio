import React from 'react';
import data from '../FakeData/dataBlog';
import { useState } from 'react';
import Cards from '../Cards/Cards';

const Blog = () => {
    const newData= data;
    // console.log(newData);
    const [blogs,setBlog]= useState(newData);
    return (
        <div>
            {
                blogs.map(blogs=> <Cards blogs={blogs}></Cards>)
            }
        </div>
    );
};

export default Blog;