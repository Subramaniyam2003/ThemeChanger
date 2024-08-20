import React, { useContext } from 'react'
import './Home.css'
import Logo from './Logo'
import Navoptions from './Navoptions'
import { Contexttheme } from '../../context/ThemeContext'

const Home = () => {
  const {bgcolor,textcolor} = useContext(Contexttheme)
  return (
    <>
        <nav id='whole-nav' style={{backgroundColor:bgcolor,color:textcolor,padding:'10px'}}>
            <Logo/>
            <Navoptions/>
        </nav>
    </>
  )
}

export default Home