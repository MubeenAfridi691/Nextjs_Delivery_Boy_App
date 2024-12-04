import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'

function Loginpage() {
  const router=useRouter()
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const [error,setError]=useState(false)
  const [errorPassword,setErrorPassword]=useState(false)

  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
 useEffect(() => {
  if(!data.email || !data.password){
    setError(true)
  }else{
    setError(false)
  }
  if(data.password.length<6){
    setErrorPassword(true)
  }else{
    setErrorPassword(false)
  }
  



 }, [data])
 

  const login=async(e)=>{
e.preventDefault()

const response = await fetch('http://localhost:3000/api',{
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    login:true,
    email:data.email,
    password:data.password
  })
})
const res=await response.json()
if(res.success){
  localStorage.setItem('token',JSON.stringify(res.user))
  router.push('/resturant/dashboard')
}else{
  alert('Invalid Credentials')
}



  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
        <input name='email' value={data.email} onChange={onChange} type="text" placeholder='Enter Your Email' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
       {
        error && !data.email && <p style={{color:'red'}}>Please Enter Your Email</p>
      }
       
        <input name='password' value={data.password}  onChange={onChange} type="password" placeholder='Enter Your Password' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
       {
        errorPassword && !data.password && <p style={{color:'red'}}>Please Enter Your Password</p>
       }
        <button onClick={login} type='submit'  style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}>Login</button>
     
    </div>
  )
}

export default Loginpage
