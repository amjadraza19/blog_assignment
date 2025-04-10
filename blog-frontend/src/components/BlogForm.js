import React, { useState } from 'react';
import API from '../api';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', desc);
    if (image) formData.append('image', image);

    try {
      await API.post('blogs/', formData);
      alert('Blog added');
    } catch (err) {
      alert('Error submitting blog');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button type="submit">Post Blog</button>
    </form>
  );
};

export default BlogForm;

