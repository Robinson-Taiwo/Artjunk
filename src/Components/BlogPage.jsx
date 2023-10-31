/* eslint-disable no-unused-vars */
import React from 'react'
import data from './data';
import picaso from "../assets/Images/picaso.png"
import castle from "../assets/Images/castle.png"


import { useNavigate, useParams } from 'react-router-dom';
import "./BlogPage.css"

const BlogPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog entry with the matching ID
  const blog = data.find(article => article.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found.</div>;
  }
  return (
    <div className='BlogPage' >

      <img src={castle} alt="" className="blogPage-image" />




      <h1 className='blogpage-desc' >{blog.desc}</h1>
      <h1 className='blogpage-date' >published on : {blog.date}</h1>
      <p className="blog-texts">
        {blog.text}
      </p>
      <div className="blog-author-div">
        <h1 className="blog-author">

          <span className='font-bold font-mono'>Written by: </span>
          Omoyeni Taiwo
        </h1>
      </div>

      {/* Additional rendering of the blog content */}
    </div>)
}

export default BlogPage