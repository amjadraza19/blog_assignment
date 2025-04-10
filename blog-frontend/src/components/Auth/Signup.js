import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    if (profileImage) {
      formData.append('profile_image', profileImage);
    }

    try {
      await API.post('register/', formData);
      alert('Signup successful! Now login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed!');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
      <input type="file" onChange={e => setProfileImage(e.target.files[0])} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
