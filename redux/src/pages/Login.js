import React, {useState} from 'react'

import { setUser} from '../redux/actions/userAction'

import { useHistory,Redirect } from 'react-router-dom'

import { useDispatch } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const formHandler = (e) => {
        e.preventDefault()
        if (email && password) {
            
            dispatch(setUser({ email, password }))
            history.push('/dashboard')
        }
        else {
            alert("Fields are empty")
        }

        
    }
    return (
        <div>
            <form onSubmit={formHandler} >
                <input placeholder="Enter your email" type="email" onChange={(e) => setEmail(e.target.value)} value={email }/>
                <input placeholder="Enter your password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
