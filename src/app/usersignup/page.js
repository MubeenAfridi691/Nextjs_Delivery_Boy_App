'use client'
import React,{useState} from 'react'


function page() {
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',
        cpassword:'',
        mobile:''})

        const handleSubmit=(e)=>{
            e.preventDefault()
            if(data.password!==data.cpassword){
                return  alert('password not matched')
              }

              const signup=fetch('http://localhost:3000/api/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                   
                    email:data.email,
                    password:data.password,
                    mobile:data.mobile

                })
              })
              if(signup.message==='Error creating user'){
                alert('user not still created successfully')
              }else{
                alert('user not created successfully')
              }
         

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
<input
placeholder=' ENTER CONFIRM PASSWORD'
onChange={onchangevalue}
name='cpassword'
style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}
/>
<input
placeholder=' ENTER MOBILE NUMBER'
onChange={onchangevalue}
name='mobile'
style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}
/>
<button onClick={handleSubmit} style={{margin:'10px',padding:'10px',borderRadius:'5px',border:'1px solid black'}}>SUBMIT</button>
      
    </div>
  )
}

export default page
