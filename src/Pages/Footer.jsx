import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <div className='f-main'>
            <div className='k1'>
                <p className='kl'>CivicFix</p> <hr className='fk'/>
                <p className='kl'>Empowering citizens to enhance communities through issue reporting.</p>
            </div>
            <div  className='pl'>
                <p className='kl'>Quick Links</p> <hr className='fk'/>
                <Link to='/home' className='nav-link1'>Home</Link>
                <Link to='/report' className='nav-link1'>Report</Link>
                <Link to='/myreports' className='nav-link1'>My Report</Link>
                <Link to='/report' className='nav-link1'>Report</Link>
            </div>
            <div className='cont'>
                <p className='kl'>Contact</p> <hr className='fk'/>
                <Link to='/contact' className='nav-link1'>Contact Support</Link>
                <Link to='/home' className='nav-link1'>Feedback</Link>
                <Link to='/home' className='nav-link1'>Join us</Link>
                <Link to='/home' className='nav-link1'>Report</Link>
            </div>
        </div>
    </div>
  )
}

export default Footer