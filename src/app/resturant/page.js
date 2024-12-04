'use client'
import React,{useState} from 'react'
import Loginpage from '../_components/Loginpage'
import Signup from '../_components/Signup'
import Header from '../_components/Header'

export default function page() {
  const [showLogin, setShowLogin] = useState(true);


  return (
  <>
  <Header/>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px',height:'100vh'}}>
  

  <h1 style={{fontSize:40,fontWeight:'bold'}}>Resturant Login & Signup Page</h1>

  {
    showLogin ? <Loginpage/> : <Signup/>
  }
 {
  showLogin ? <button onClick={()=>setShowLogin(false)} style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}>Don't Have An Account?</button> : <button onClick={()=>setShowLogin(true)} style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}>ALready Have An Account?</button>
 }

    </div>
  </>
  )
}
