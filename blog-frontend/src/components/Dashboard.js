import { useEffect, useState } from 'react';
import API from '../api';
export default function Dashboard(){
  const [user,setUser]=useState({});
  useEffect(()=>{API.get('dashboard/').then(r=>setUser(r.data))},[]);
  return <div>
    <h1>Welcome, {user.username}</h1>
    {user.profile_image && <img src={`https://<YOUR_BACKEND_URL>${user.profile_image}`} alt="" width={100}/>}
  </div>;
}
