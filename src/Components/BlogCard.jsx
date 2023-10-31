/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import castle from "../assets/Images/castle.png"
import read from "../assets/Icons/read.svg"
import picaso from "../assets/Images/picaso.png"
import venice from "../assets/Images/venice.png"

import "./BlogCard.css"
import { Link } from 'react-router-dom'

const BlogCard = ({ id, pic, date, title }) => {
  const isLongTitle = title.length > 50; // Adjust the threshold as needed

  return (
    <div className={`blog ${isLongTitle ? 'long-title' : ''}`}>

      <img className='blogCard-image' src={venice} alt="" />

      <div className="blog-second-section">


        <p className="date-updated">
          {date}
        </p>

        <Link to={`/blogs/${id}`} className={`blog-title ${isLongTitle ? 'long-title' : ''}`} >
          {title}
        </Link>

        <div className="read-more-div">
          <img src={read} alt="" />
        </div>

      </div>


    </div>
  )
}

export default BlogCard