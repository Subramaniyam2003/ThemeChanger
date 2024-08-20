
import { useState } from 'react';
import './App.css';
import { About } from './Component/themeproject/About';
import Contact from './Component/themeproject/Contact';
import Home from './Component/themeproject/Home';
import { Contexttheme } from './context/ThemeContext';

function App() {

  const [bgcolor,setBgcolor] = useState('black')
  const [textcolor,setTextcolor] = useState('white')
  

  var i = 2;
  function changes()
  {
    if(i%2===0){
     setBgcolor('white')
     setTextcolor('black')
     console.log('light');
     i = i+1;
     console.log(i);
    }
    else{
      setBgcolor('black')
     setTextcolor('white')
     console.log('dark');
     i = i+1;
    }
  }




  return (
    <>
   
    <Contexttheme.Provider value={{bgcolor,textcolor,changes}}>
    <Home/>
    <About/>
    <Contact/>
    </Contexttheme.Provider>
  
    </>
  );
}

export default App;
