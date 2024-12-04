'use client'
import { useEffect, useState } from "react"
import React from 'react'
import { useRouter } from "next/navigation"

function page(props) {
    const router = useRouter()
    const {params} = props
    const [foodname,setfoodname]=useState('')
    const [foodprice,setfoodprice]=useState('')
    const [fooddescription,setfooddescription]=useState('')
    const [foodpath,setfoodpath]=useState('')

const getfood = async()=>{
  const res = await fetch(`http://localhost:3000/api/edit/${params.id}`,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data = await res.json()
    setfoodname(data.result.foodname)
    setfoodprice(data.result.foodprice)
    setfooddescription(data.result.fooddescription)
    setfoodpath(data.result.foodpath)

}

const updatefood = async()=>{
    const res = await fetch(`http://localhost:3000/api/edit/${params.id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            foodname,
            foodprice,
            fooddescription,
            foodpath
        })
    })
    // const data = await res.json()
    // if(data.success){
    //     // router.push('/resturant/dashboard')
    // }
}

useEffect(()=>{
getfood()
},[])

  return (
    <div>
        <h1>Update Foods Page</h1>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100vh'}}>
        <input onChange={(e)=>setfoodname(e.target.value)} value={foodname} name='foodname'  type='text' placeholder='Enter Food Name' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input onChange={(e)=>setfoodprice(e.target.value)} value={foodprice} name='foodprice'  type='text' placeholder='Enter Food Price' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input onChange={(e)=>setfooddescription(e.target.value)} value={fooddescription} name='fooddescription'  type='text' placeholder='Enter Food Description' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input onChange={(e)=>setfoodpath(e.target.value)} value={foodpath} name='foodpath'  type='text' placeholder='Enter Food Path' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
  
      <button  onClick={updatefood} style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}}>Add Food</button>
      <button  onClick={()=>router.push('../dashboard')} style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}}>Back to Dashboard</button>
    </div>
      
    </div>
  )
}

export default page
