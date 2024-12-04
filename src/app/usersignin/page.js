'use client'
import React,{useState} from 'react'
// import Loginpage from '../_components/Loginpage'


function page() {
    const [data,setData]=useState({
   
        email:'',
        password:'',
        })

        const handleSubmit=(e)=>{
            e.preventDefault()
           console.log(data)

              const signup=fetch('http://localhost:3000/api/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                   Login:true,
                   email:data.email,
                   password:data.password,
                   

                })
              })
             
         

        }
        const onchangevalue=(e)=>{
           
            setData({...data,[e.target.name]:e.target.value})
        }

  return (
    <div  style={{width:'100%',height:"100%",display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
<input
placeholder=' ENTER EMAIL'
onChange={onchangevalue}
name='email'
style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}
/>
<input
placeholder=' ENTER PASSWORD'
onChange={onchangevalue}
name='password'
style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}
/>


<button onClick={handleSubmit} style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}>SUBMIT</button>
      
    </div>
  )
}

export default page
