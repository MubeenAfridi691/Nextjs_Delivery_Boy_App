'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function Header({
  cartItems,
  setCartItems,
}) {
    const [isdata, setiddata] = useState(false);
    const [cartcount, setCartCount] = useState(0);
    const [cartdata, setCartdata] = useState([]);
    const router=useRouter()
    const pathname=usePathname()

    console.log('header',cartItems)
   
    useEffect(() => {
        const token = localStorage.getItem('token');  // Get token from localStorage
    
        // If no token, redirect to the restaurant page
        if (!token) {
          router.push('/resturant');
        } else {
          // If token exists, set the iddata state
          setiddata(JSON.parse(token));  
          
          // Assuming setiddata is defined elsewhere
    
          // If token exists and we're on the restaurant page, redirect to dashboard
          if (pathname === '/resturant') {
            router.push('/resturant/dashboard');
          }

      
        }
      }, [router, pathname]); 
     
      
      useEffect(() => {
      
        if(cartItems){
          setCartCount(cartItems.length);
        }
      }, []);
   
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',color:'white'}}>
<div>
<img 
style={{width:'100px',height:'100px'}}
src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
    
    </div>  

<div style={{display:'flex',marginRight:'20px',alignItems:'center',padding:'10px',color:'white'}}>
<li  style={{listStyle:'none',color:'black',marginRight:'20px'}} >
    <Link href="/">Home</Link>
</li>
{
    isdata && <div style={{display:'flex',alignItems:'center',padding:'10px',color:'white'}}>
        <li style={{listStyle:'none',color:'black',marginRight:'20px'}}>
    <Link href="/">profile</Link> 

</li> 
<li style={{listStyle:'none',color:'black',marginRight:'20px'}}>
    <Link href="/">Logout</Link> 
    </li>
    </div>


}

</div>
    </div>
  )
}

export default Header
