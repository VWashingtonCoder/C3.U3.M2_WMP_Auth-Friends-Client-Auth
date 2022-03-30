import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";

export default function FriendsList(props) {
    const { friends, getFriends } = props

    if (!window.localStorage.getItem('token')){
        return <Navigate to='/' />
    }

    useEffect(() => {
        getFriends()
    }, [])

    return(
        <div id='friend-list'>
            <h2>FRIENDS LIST</h2>  
            <div id='friend-container'>
                {friends.map(friend => {
                    console.log(friend)
                    return(
                        <div key={friend.id}>
                            {friend.name} - {friend.email}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}