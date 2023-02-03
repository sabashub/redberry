import React from 'react'
import logo from '../../assets/LOGO-02 3.png'
import './Home.css'
import logo1 from '../../assets/LOGO-40 1.png'
import home from '../../assets/home.png'
const Home = () => {
  return (
    <div className='container'>
            <img src={home} alt="home"className = "home"/>
            <img src={logo} alt = "logo"className='logo'/>  
            < hr className='hr'/>
            <button className='btn'><h3 className='text'>რეზიუმეს დამატება</h3></button>
            
            <img src={logo1} alt = "logo2"className = "logo1"/>
    </div>
  )
}

export default Home