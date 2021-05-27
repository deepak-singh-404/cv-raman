import React from 'react'
import {useSelector } from 'react-redux'

const Dashboard = () => {
    const data = useSelector(store => store._user.user)
    
    return (
        <div>
            <h1>THis is dashboard</h1>
            <h1>Email: {data.email}</h1>
            <h2>Password: {data.password }</h2>
        </div>
    )
}

export default Dashboard
