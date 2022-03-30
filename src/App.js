import React, { useState } from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './component/Login';
import FriendsList from './component/FriendsList';
import axios from "axios";
import axiosWithAuth from './axios';

const loginURL = 'http://localhost:9000/api/login'
const friendsURL = 'http://localhost:9000/api/friends'

function App() {
  //states
  const [friends, setFriends] = useState([]) 
  
  // functions
  const navigate = useNavigate()

  const login = ({ username, password }) => {
    axios.post(loginURL, { username, password })
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
        navigate('/friends')
      })
      .catch(err => {
        console.log(err.response.data.error)
      })
  }

  const getFriends = () => {
    axiosWithAuth().get(friendsURL)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  return (
    <div className="App">
      <h1>Client Auth Project</h1>
      
      <nav className='navigation'>
        <NavLink id='loginScreen' to='/'>Login</NavLink>
        <NavLink id='friendList' to='/friends'>FriendsList</NavLink>
      </nav>
      <Routes>
        <Route path='/' 
          element={<Login login={login} />} 
        />
        <Route path='/friends' 
          element={<FriendsList friends={friends} getFriends={getFriends} />} 
        />
      </Routes>
      
    </div>
  );
}

export default App;
