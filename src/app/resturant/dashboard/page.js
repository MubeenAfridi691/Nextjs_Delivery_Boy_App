'use client'
import React,{useState} from 'react'
import Header from '@/app/_components/Header'
import Addfood from '@/app/_components/Addfood'
import Fooditem from '@/app/_components/Fooditem'



function Page() {
  const [showAddfood,setShowAddfood] = useState(false)
  return (
    <div>
        <Header/>
     
        <button style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}} onClick={()=>setShowAddfood(true)}>Add Food</button>
        <button style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}} onClick={()=>setShowAddfood(false)}>Dashboard</button>
        {
          showAddfood ? <Addfood/> : <Fooditem/>
        }

    </div>
  )
}

export default Page
