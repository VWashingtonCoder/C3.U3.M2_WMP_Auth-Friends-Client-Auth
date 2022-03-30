import React, { useState } from 'react';
import './App.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './component/Login';
import FriendsList from './component/FriendsList';
import AddFriends from './component/AddFriends';
import axios from "axios";
import axiosWithAuth from './axios';

const loginURL = 'http://localhost:9000/api/login'
const friendsURL = 'http://localhost:9000/api/friends'

function App() {
  //states
  const [friends, setFriends] = useState([]) 
  const [message, setMessage] = useState('')
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

  const postFriend = (name, email) => {
    axiosWithAuth().post(friendsURL, {name, email})
      .then(res => { 
        setFriends(res.data)
        setMessage('Congrats! You Added A New Friend!') 
      })
      .catch(err => { debugger })
  }

  return (
    <div className="App">
      <h1>Client Auth Project</h1>
      
      <nav className='navigation'>
        <NavLink id='loginScreen' to='/'>Login</NavLink>
        <NavLink id='friendList' to='/friends'>FriendsList</NavLink>
        <NavLink id='addFriend' to='/friends/add'>Add Friend</NavLink>
      </nav>
      <Routes>
        <Route path='/' 
          element={<Login login={login} />} 
        />
        <Route path='/friends' 
          element={<FriendsList friends={friends} getFriends={getFriends} />} 
        />
        <Route path='/friends/add'  
          element={<AddFriends postFriend={postFriend} message={message} />}
        />
      </Routes>
      
    </div>
  );
}

export default App;
