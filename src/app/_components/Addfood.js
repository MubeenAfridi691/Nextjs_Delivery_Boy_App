'use client'
import React,{useState} from 'react'

function Addfood() {
    const [fooddata,setFooddata] = useState({
        foodname:'',
        foodprice:'',
        fooddescription:'',
        foodpath:'',
    })

    const handleChange = (e) => {
        setFooddata({
            ...fooddata,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        
    const getitem= localStorage.getItem('token')
    const token = JSON.parse(getitem)
   
   

const response =await fetch('http://localhost:3000/apifood',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
   

    body:JSON.stringify({
      fooddata:fooddata,
        rest_id:token
    })
})
if(response.success){
    alert('food added successfully')
}
      
    }


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100vh'}}>
        <input name='foodname' value={fooddata.foodname} onChange={handleChange} type='text' placeholder='Enter Food Name' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input name='foodprice' value={fooddata.foodprice} onChange={handleChange} type='text' placeholder='Enter Food Price' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input name='fooddescription' value={fooddata.fooddescription} onChange={handleChange} type='text' placeholder='Enter Food Description' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
        <input name='foodpath' value={fooddata.foodpath} onChange={handleChange} type='text' placeholder='Enter Food Path' style={{width:'300px',height:'30px',marginBottom:'10px',border:'1px solid black'}}/>
  
      <button onClick={handleSubmit} style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}}>Add Food</button>
    </div>
  )
}

export default Addfood
