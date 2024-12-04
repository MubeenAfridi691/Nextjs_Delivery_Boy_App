'use client'
import React,{useEffect, useState} from 'react'
import { useRouter } from 'next/navigation'

function Fooditem() {
const [fooddata,setFooddata] = useState([])
const router = useRouter()

const getfood = async () => {
    const getitem= localStorage.getItem('token')
    const token = JSON.parse(getitem)

    const response =await fetch('http://localhost:3000/apifood/'+token._id,{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        
    })
    const data = await response.json()
    if(data.success){
        setFooddata(data.result)
    }
   
}

const Deletefood = async (id) => {
    const response =await fetch('http://localhost:3000/apifood/'+id,{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },

    })
    const data = await response.json()
    if(data.success){
        getfood()
    }
}


useEffect(() => {
    getfood()

},[])


  return (
    <div>
      <table style={{width:'100%',border:'1px solid black'}}>
        <thead style={{background:'black',color:'white'}}>
            <tr style={{height:'50px'}}>
                <td>S.no</td>
                <td>Name</td>
                <td>Description</td>
                <td>Price</td>
                <td>images</td>
            </tr>
        </thead>
        <tbody>
            
               {
                fooddata.map((food,index)=>(
                   <>
                   <tr>
                    <td key={index} style={{height:'50px'}}>{index+1}</td>
                    <td style={{height:'50px'}}>{food.foodname}</td>
                    <td style={{height:'50px'}}>{food.fooddescription}</td>
                    <td style={{height:'50px'}}>{food.foodprice}</td>
                    <td style={{height:'50px'}}><img src={food.foodpath} style={{width:'100px',height:'100px'}}/></td>
                    <button  onClick={()=>router.push('/resturant/dashboard/'+food._id)} style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}}>Edit</button>
                    <button onClick={()=>Deletefood(food._id)} style={{background:'black',border:'2px',borderRadius:'30px',padding:'10px' ,color:'white'}}>Delete</button>
                    </tr>
                   </>

                )) 
               }
           
        </tbody>
      </table>
    </div>
  )
}

export default Fooditem
