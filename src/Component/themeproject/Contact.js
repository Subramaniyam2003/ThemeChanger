import React, { useContext } from 'react'
import { Contexttheme } from '../../context/ThemeContext'

const Contact = () => {
  const {bgcolor,textcolor,changes} = useContext(Contexttheme)
  return (
    <>
        <div style={{backgroundColor:bgcolor,color:textcolor,position:'fixed',bottom:'0',right:'0',left:'0',textAlign:'center',padding:'40px'}}>
          <h1>Contact Here</h1>
            <h2>SkillCart</h2>
            <h3>Email id: Subramaniyam21cse@gmail.com</h3>
            <h4>Phone No : 1234567890</h4>
            <h6>Copyright @ 2024</h6>
        </div>
    </>
  )
}

export default Contact