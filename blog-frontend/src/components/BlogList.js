import React, { useEffect, useState } from 'react';
import API from '../api';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('blogs/').then(res => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h4>{blog.title}</h4>
          <img src={blog.image} alt="blog" width="150" />
          <p>{blog.description.slice(0, 100)}...</p>
          <Link to={`/blog/${blog.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

