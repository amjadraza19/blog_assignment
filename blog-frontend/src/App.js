import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login  from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import BlogDetail from './components/BlogDetail';

function App(){
  const auth = !!localStorage.getItem('access');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/"       element={auth ? <Dashboard/> : <Navigate to="/login"/>}/>
        <Route path="/blogs"  element={<BlogList/>}/>
        <Route path="/blogs/new" element={<BlogForm/>}/>
        <Route path="/blogs/edit/:id" element={<BlogForm edit/>}/>
        <Route path="/blogs/:id"   element={<BlogDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
