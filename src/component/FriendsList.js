import React, { useEffect, useState } from 'react';


export default function FriendsList(props) {
    const { friends, getFriends } = props
    
    console.log(props)

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