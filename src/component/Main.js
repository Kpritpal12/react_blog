import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
           
            <div className="collapse navbar-collapse main" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item-mainName">
                        <Link to='/Home' className="nav-link" href="#"><p className='text'>Home</p> <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item-mainName">
                        <Link to='Category/Tourism'  className="nav-link" href="#"><p className='text'>Tourism</p></Link>
                    </li>
                    <li className="nav-item-mainName">
                        <Link to='Category/Fitness'  className="nav-link" href="#"><p className='text'>Fitness</p></Link>
                    </li>
                    <li className="nav-item-mainName">
                        <Link to='Category/Technology'  className="nav-link" href="#"><p className='text'>Technology</p></Link>
                    </li>
                    <li className="nav-item-mainName">
                        <Link to='Category/Bollywood'  className="nav-link" href="#"><p className='text'>Bollywood</p></Link>
                    </li>
                    <li className="nav-item-mainName">
                        <Link to='Category/Food'  className="nav-link" href="#"><p className='text'>Food</p></Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
    )
}

export default Main