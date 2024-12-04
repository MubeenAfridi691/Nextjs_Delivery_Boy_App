'use client'
import React ,{useState,useEffect}from 'react'
import { useRouter } from 'next/navigation'

function Signup() {
  const [error,setError]=useState(false)
  const [errorPassword,setErrorPassword]=useState(false)
  const router=useRouter()
  const [data,setData]=useState({
   name:'',
    email:'',
    password:'',
    confirmPassword:'',
    phone:'',
    address:'',
    resturantname:'',
  })

  useEffect(() => {
    // Check password match
    if (data.password !== data.confirmPassword) {
      setError(true);
    } else {
      setError(false);
    }

    // Check if any required field is missing
    const isMissingField = !data.name || !data.email || !data.password || !data.confirmPassword || !data.phone || !data.address || !data.restaurantName;
    if (isMissingField) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }, [data]);



 const onChange=(e)=>{

  setData({...data,[e.target.name]:e.target.value})

 }
 const onsubmit= async(e)=>{
  e.preventDefault()

  try {
    const response = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.success) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    console.log(responseData.message);

    if (responseData.success) {

      localStorage.setItem('token', JSON.stringify(responseData.message));
      router.push('/resturant/dashboard'); // Adjust the path as necessary
    } else {
      router.push('/restaurant'); // Adjust the path as necessary
    }
  } catch (error) {
    // Handle errors, such as fetch failures or JSON parsing errors
    console.error('Error during form submission:', error);
    // Optionally show an error message to the user
  }
 }


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px'}}>
    <input value={data.name} name='name' onChange={onChange} type="text" placeholder='Enter Your Name' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
    {
      error && !data.name && <p style={{color:'red'}}>Please Enter Your Name</p>
    }
    <input value={data.email} name='email' onChange={onChange} type="text" placeholder='Enter Your Email' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
    {
      error && !data.email && <p style={{color:'red'}}>Please Enter Your Email</p>
    }
    <input value={data.password} name='password' onChange={onChange} type="password" placeholder='Enter Your Password' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
      {
      error && !data.password && <p style={{color:'red'}}>Please Enter Your Password</p>
    }
    <input value={data.confirmPassword} name='confirmPassword' onChange={onChange} type="password" placeholder='Enter Your Confirm Password' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
    {
      errorPassword && !data.confirmPassword && <p style={{color:'red'}}>Please Enter Your Confirm Password</p>
    }
    <input value={data.phone} name='phone' onChange={onChange} type="number" placeholder='Enter Your Phone No.' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
    {
      error && !data.phone && <p style={{color:'red'}}>Please Enter Your Phone No.</p>
    }
    <input value={data.address} name='address' onChange={onChange} type="text" placeholder='Enter Resturant Name' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>
    {
      error && !data.address && <p style={{color:'red'}}>Please Enter Your Address</p>
    }
    <input value={data.resturantname} name='resturantname' onChange={onChange} type="text" placeholder='Enter Address' style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}/>

{
  error && !data.resturantname && <p style={{color:'red'}}>Please Enter Your Resturant Name</p>
}
    <button type='submit' onClick={onsubmit} style={{width:'300px',height:'40px',borderRadius:'5px',border:'1px solid black',padding:'10px',margin:'10px'}}>Signup</button>
    </div>
  )
}

export default Signup
