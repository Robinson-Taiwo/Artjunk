/* eslint-disable no-unused-vars */
import React from 'react'
import data from './data';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog entry with the matching ID
  const blog = data.find(article => article.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found.</div>;
  }
  return (
    <div>
      <h1>{blog.desc}</h1>
      {/* Additional rendering of the blog content */}
    </div>)
}

export default BlogPage