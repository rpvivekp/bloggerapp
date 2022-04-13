import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {books,BlogDetails,CourseDetail} from './Books';
ReactDOM.render(<App book={books} blog={BlogDetails} det={CourseDetail}/>,document.getElementById('root'));
