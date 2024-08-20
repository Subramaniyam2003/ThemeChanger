import React, { useContext } from 'react'
import { Contexttheme } from '../context/ThemeContext'

const Themes = () => {
    const {count} = useContext(Contexttheme);
  return (
    <>
        <div>{count}</div>
    </>
  )
}

export default Themes