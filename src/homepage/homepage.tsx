import React from 'react'
import Circles from 'src/components/circles'
import profilePicture from 'src/img/tristan-kelsey-proposal-035.jpg'

export default function HomePage() {
  return (
    <div className="HeroImage">
        <img className="ProfilePicture" style={{height:"30%", width:"30%"}} src={profilePicture} alt="tristan's profile"/>
        <div className="Profile Text">
          <h1 className="header" >This is Tristan Lotivio</h1>
          <h3 className="subheader" >He is a software engineer</h3>
          <h3 className="subheader" >He is getting better at it</h3>
        </div>
    </div>
  )
}
