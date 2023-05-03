import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({setlogincheck}) => {
    const {alluserdata} = useSelector((storedata)=>storedata)
  return (
    
    <div>
        <nav>
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Technobrain</label>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/search"><li>Search</li></Link>
        {/* <Link to="/userdetail"><li>Your </Link> */}
        <Link to="/" onClick={()=>setlogincheck(false)} style={{color:"white",fontSize:"21px"}}> Logout</Link>
        <Link to='/userdetail'><li>Hi, {alluserdata.login}</li></Link>
        
      </ul>
    </nav>


    </div>
  )
}

export default Navbar