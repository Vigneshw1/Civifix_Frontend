import React from 'react'
import './Thank.css'
import { useNavigate } from 'react-router-dom' ;
const Thank = () => {
  const navigate=useNavigate();
  return (
    <div className='m'>
      <div className='n'>
        <h1 style={{color:"rgb(53, 180, 53)"}}>Thank You!</h1>
        <p style={{color:"black" ,fontSize:"25px"}}>Your issue report has been received.Your proactive approach helps create a better and safer community for everyone.</p>
        <div class="tips">
            <h3>Helpful Tips:</h3>
            <ul>
                <li>Ensure to provide accurate details for a quicker resolution.</li>
                <li>Check for updates on your report from local authorities.</li>
                <li>Encourage your community to report issues to improve the surroundings.</li>
                <li>Consider volunteering for local clean-up initiatives.</li>
            </ul>
        </div>
        < button style={{width:"80px"}}className='but' id='but' onClick={()=>{navigate('/home')}}>Home</button>
      </div>
    </div>
  )
}

export default Thank