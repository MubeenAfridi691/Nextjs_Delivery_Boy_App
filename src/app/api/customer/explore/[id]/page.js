'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation'; 
import Customerheader from '@/app/_components/Customerheader';


function Page() {
  const [details, setDetails] = useState(null);
  const { id } = useParams();  // Unwrap the dynamic route parameter
  const searchParams = useSearchParams(); // Access query parameters
  const ids = searchParams.get('ids'); // Get the `ids` query param
  const [cartItems, setCartItems] = useState([]);
  const [cartStorage, setCartStorage] = useState(JSON.parse(localStorage.getItem('cartdata')));
 const [cartId, setCartId] = useState([]);
 const [RemoveCartId, setRemoveCartId] = useState([]);


 const removecarddata=(id)=>{
  setRemoveCartId(id)
  const localid=cartStorage.filter((item)=>item._id!==id)
  setCartStorage(localid)
  


 }



 useEffect(() => {
  // Set cartId based on the updated cartStorage
  setCartId(cartStorage?.map((item) => item._id));
  setRemoveCartId(null);
}, [cartStorage]);

console.log('cartId:', cartId);



  console.log('cartId:', cartId);

  // console.log('id from params:', id);
  // console.log('ids from searchParams:', ids);
  // console.log('cartItems:', cartItems)


  const fetchDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/customer/${ids}`);
      const data = await response.json();
      setDetails(data.message); // Assuming the API returns an array in `data.message`
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };


  useEffect(() => {
    if (ids) {
      fetchDetails(); // Fetch details when `id` is available
    }
  }, [ids]); // Trigger the effect when `id` changes

  return (
    <div>
      <Customerheader  setRemoveCartId={setRemoveCartId} setCartItems={setCartItems} cartItems={cartItems} />
      <div className='background-img'>
        <h1 style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{decodeURI(id)}</h1>
      </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
     {
        details && (
          <div>
            <h2>{details.foodname}</h2>
            <p>{details.fooddescription}</p>
            <p>Price: {details.price}</p>
            <p>Rating: {details.rating}</p>
            <p>Location: {details.location}</p>
          {
            cartId.includes(details._id) ? (
              <button  onClick={()=>removecarddata(details._id)} style={{backgroundColor: '#4CAF50', color: 'white',fontSize: '16px',border: 'none', borderRadius: '8px',cursor: 'pointer',transition: 'background-color 0.3s', // Smooth transition effect
              }} className='btn btn-primary'>Remove From cart</button>
            ) : (
              <button onClick={()=>setCartItems(details)}  style={{backgroundColor: '#4CAF50', color: 'white',fontSize: '16px',border: 'none', borderRadius: '8px',cursor: 'pointer',transition: 'background-color 0.3s', // Smooth transition effect
              }}>
                    Add to Cart
                  </button>            )
          }
          </div>
      
        )
      }
     </div>
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
       
      </div>
    </div>
  );
}

export default Page;
