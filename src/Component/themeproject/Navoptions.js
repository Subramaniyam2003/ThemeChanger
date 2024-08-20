import React, { useContext } from 'react'
import { Contexttheme } from '../../context/ThemeContext'

const Navoptions = () => {
  const {changes} = useContext(Contexttheme)
  return (
    <>
        <div id='nav-options'>
                <ul style={{listStyle:'none',display:'flex'}}>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <button onClick={()=>changes()}>
                            Change theme
                        </button>
                    </li>
                </ul>
            </div>
    </>
  )
}

export default Navoptions