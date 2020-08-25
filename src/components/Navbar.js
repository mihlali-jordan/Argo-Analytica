import React from 'react'
import '../tailwind.css'
import logo from '../argo-logo.svg'

export const Navbar = () => {
    return (
        <div className="flex flex-row h-20 bg-argo-dark shadow-xl py-2">
            <img src={logo} alt=""/>
        </div>
    )
}
