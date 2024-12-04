'use client'
import React,{useState} from 'react'
import Customerheader from '../_components/Customerheader'


function page(){
    const [cartstorage,setCartstorage]=useState(JSON.parse(localStorage.getItem('cartdata')))


  return (
    <div className='flex flex-col justify-center items-center'>
        {
            cartstorage?.map((item)=>{
                return(
                    <div>
                        <p>{item.foodname}</p>
                        <p>{item.foodprice}</p>
                        <p>{item.fooddescription}</p>
                        <p>{item.foodpath}</p>
                        <p>{item.rest_id}</p>
                        <p>{item.foodprice}</p>
                    </div>
                )
            })
          
        
        }

    </div>
  )
}

export default page
