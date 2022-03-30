import React, { useState } from "react";

const initialFormValues = {
    name: "",
    email: ""
}

export default function AddFriends(props) {
    const [values, setValues] = useState(initialFormValues)

    const { postFriend, message } = props

    const onChange = evt => {
        const { id, value } = evt.target
        setValues({ ...values, [id]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        postFriend(values)
        setValues(initialFormValues)
    }

    return(
        <form id='friend-form' onSubmit={onSubmit}>
            <h2>Add Friend Form</h2>
            <div className="message">{message}</div>
            <label>Friend Name</label>
            <input
                value={values.name}
                onChange={onChange}
                placeholder='Enter Name'
                id='name'
            />
            <label>Friend Email</label>
            <input 
                value={values.email}
                onChange={onChange}
                placeholder='Enter email'
                id='email'
            />
            <button id="submitBtn">Submit</button>
        </form>
    )
}