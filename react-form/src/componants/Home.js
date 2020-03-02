import React from 'react'
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div>
            <h1>Home Screen</h1>
            <Link to = "/forms">Login</Link>
        </div>
    )
}