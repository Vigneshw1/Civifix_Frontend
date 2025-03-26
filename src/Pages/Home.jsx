import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from './Footer'
import Nav from '../Components/Navbar'
import rep from './upload-file_9425398.png'
import plan from './planning_13079375.png'
import rev from './recognition_12470392.png'
import inno from './innovation_10353955.png'
const Home = () => {
  return (
    <div className='hu'>
        <Nav />
        <div className='fp'>
            <h1 style={{color:"black"}}>Working flow of CivicFix</h1>
            <p>"CivicFix – Report. Track. Resolve. 🚀 Making communities better, one report at a time!"</p>
        </div>
        <div className='o'>
            <div className='y'>
                <img src={rep} className='i'/>
                <h2>1.Submit a Report</h2>
                <hr className='g'/>
                <p style={{color:"grey"}} className='df'>Take a photo of the issue, describe it briefly, and mark its location on the map.</p>
            </div>
            <div className='y'>
                <img src={rev} className='i'/>
                <h2>2. Review by Officials</h2>
                <hr className='g'/>
                <p style={{color:"grey"}} className='df'>Local authorities review, verify, and assign your report to the relevant department.</p>
            </div>
            <div className='y'>
                <img src={plan} className='i'/>
                <h2>3. Solution Planning</h2>
                <hr className='g'/>
                <p style={{color:"grey"}} className='df'>The corresponding department takes action to resolve the issue.</p>
            </div>
            <div className='y'>
                <img src={inno} className='i'/>
                <h2>4. Working on Solution</h2>
                <hr className='g'/>
                <p style={{color:"grey"}} className='df'>Track the progress of your report and receive notifications when the issue is resolved.</p>
            </div>
        </div>
        <div className='gu'>
            <h1 style={{color:"rgb(0,52,105)"}}>Report Local Issues. Improve Your Community.</h1>
            <p>Help make your neighborhood better by reporting potholes, graffiti, broken streetlights, and other issues for quick resolution by local authorities.</p>
            <div style={{display:"flex",gap:"20px"}}><Link to='/report' className='fh'>Report a new Issue</Link><Link to='/myreports' className='fh'>View Report Records</Link></div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home