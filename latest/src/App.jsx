import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import HomePage from './UserPages/HomePage';

export default function App() {
  return (

    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user/homepage' element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>
  );
}