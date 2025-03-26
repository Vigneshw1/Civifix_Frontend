import React from 'react'
import Card from '../Components/Card'
import Nav from '../Components/Navbar'
import Footer from './Footer'
import path from './pathole.jpeg'
import sl from'./streetlight.jpg'
import drain from'./drainage.jpeg'
import pipes from'./pipes.jpeg'
import soc from './soceity.jpg'
import './MyReport.css'
const MyReport = () => {
  return (
    <div>
      <div className='mr-main'>
          <Nav />
          <div className='hk'>
            <div style={{display:"flex",flexDirection:'column',gap:"10px"}}>
              <h1 style={{color:"black"}}>Your Contribution to a Better Society</h1>
              <p style={{color:"black",fontWeight:'bold'}} className='sri'>No of Reports submitted : 4</p>
              <p style={{color:"black",fontWeight:'bold'}} className='sri'>No of Issues on progress : 2</p>
              <p style={{color:"black",fontWeight:'bold'}} className='sri'>No of Issues Checking : 1</p>
              <p style={{color:"black",fontWeight:'bold'}} className='sri'>No of Issues on review : 1</p>
            </div>
            <img src={soc} className='wig' />
          </div>
          <div className='mr-one'>
            <Card name="Pathole" status="On Progress" color="red" image={path} location="Sheeba nagar,Kaniyur" />
            <Card name="Street-Lights" status="Completed" color="lightgreen" image={sl} location="Kovaipudur pirivu"/>
            <Card name="Drainage" status="On Review" color="orange" image={drain} location="Sengalipalayam"/>
            <Card name="Water-Pipe" status="Checking" color="Blue" image={pipes}location="Saibaba colony"/>
          </div>
        <Footer/>
      </div>
    </div>
  )
}

export default MyReport