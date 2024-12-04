import React,{useState,useEffect} from 'react'


function Listresturants({
   
}) {
 

  return (
    <div style={{width:'90%',margin:'auto',display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"}}>
        {
            resturants.map((resturant) => (
                <div style={{background:'#fcf403',display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",border:"1px solid black",borderRadius:"10px",margin:"10px",padding:"10px"}}>
                    <h2>Name : {resturant.foodname}</h2>
                    <h2>price : {resturant.price}</h2>
                    <h2>information : {resturant.fooddescription}</h2>
                    <h2>Contact :+92 {" "} {resturant._id}</h2>
                    <h2>images : {resturant.foodpath}</h2>
                </div>
            ))
        }
   
    </div>
  )
}

export default Listresturants
