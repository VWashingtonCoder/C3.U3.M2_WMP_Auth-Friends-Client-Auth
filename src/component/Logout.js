import React from 'react';

export default function Logout(props) {
    const { logout } = props

    const onClick = evt => {
        evt.preventDefault()
        logout()
    }

    return(
        <div id='logout'>
            <button className='logout-Btn' onClick={onClick}>
                Logout
            </button>
        </div>
    )
}