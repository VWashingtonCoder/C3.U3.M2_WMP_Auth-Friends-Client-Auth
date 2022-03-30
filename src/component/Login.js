import React, { useState } from 'react'

const initialLoginValues = {
    username: "",
    password: ""
}

export default function Login(props) {
    const [values, setValues] = useState(initialLoginValues)
    const { login } = props

    const onChange = evt => {
        const { id, value } = evt.target
        setValues({ ...values, [id]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        login(values)
    }

    return(
        <form id='login-form' onSubmit={onSubmit}>
            <h2>Login</h2>
            <label>Username</label>
            <input
                value={values.username}
                onChange={onChange}
                placeholder='Enter Username'
                id='username'
            />
            <label>Password</label>
            <input 
                value={values.password}
                onChange={onChange}
                placeholder='Enter Password'
                id='password'
            />
            <button id="submitBtn">Submit</button>
        </form>
    )
}