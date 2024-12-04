import React,{useEffect, useState} from 'react'
import Link from 'next/link'


function Customerheader({
 cartItems,
 RemoveCartId
}) {

 


  
const cartstorage = JSON.parse(localStorage.getItem('cartdata'))
  const [cartcount, setCartCount] = useState(cartstorage?.length);
  const [cartdata, setCartdata] = useState([]);
  
localStorage

  useEffect(()=>{
    if(RemoveCartId){
      let localcart=cartdata.filter((item)=>item._id!==RemoveCartId)
      setCartdata(localcart)
      setCartCount(cartcount-1)
      localStorage.setItem('cartdata',JSON.stringify(localcart))
      if(localcart.length===0){
        localStorage.removeItem('cartdata')
      }
      if(!localcart){
        localStorage.removeItem('cartdata')
      }
    }


  },[RemoveCartId])


  useEffect(() => {
    // const cartData = JSON.parse(localStorage.getItem('cartdata') );
  if (cartstorage?.length === 0) {
    localStorage.removeItem('cartdata');
  }
    if(cartItems ){
      if(cartcount){
       let localcart=cartdata
       localcart.push(JSON.parse(JSON.stringify(cartItems))) 
       setCartdata(localcart)
       setCartCount(localcart.length)
       localStorage.setItem('cartdata',JSON.stringify(localcart))
      }else{
        setCartCount(1)
        setCartdata([cartItems])
        localStorage.setItem('cartdata',JSON.stringify([cartItems]))
        
      }
    }

   
  }, [cartItems]);

 
  return (
    <div  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <img
        src='https://png.pngtree.com/png-clipart/20200701/original/pngtree-shopping-mall-logo-png-image_5406131.jpg'
        width={100}height={100}
        style={{borderRadius:50}}
        />
        <nav style={{display:'flex',gap:'10px'}}>
         <ul>
         <Link  href={'/'}>Home</Link>
         </ul>
         <ul>
         <Link  href={'/'}>Signup/Login</Link>
         </ul>
         <ul>
         <Link  cartItems={cartItems} href={!cartItems ==  " " ? '/cart':'#'}>Cart({cartcount-1})</Link>
         </ul>
         <ul>
         <Link  href={'/'}>Add Resturant</Link>
         </ul>
                
                
            
        </nav>

    
      
    </div>
  )
}

export default Customerheader
