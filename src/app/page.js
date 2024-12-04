'use client'
import React,{useState} from 'react'
import Customerheader from './_components/Customerheader'
import Body from './_components/Body'
import Listresturants from './_components/Listresturants'

function page() {
  const [resturants,setresturants] = useState([]);

  return (
    <div>
 
 <Customerheader/>
 <Body resturants={resturants} setresturants={setresturants}/>
  {/* <Listresturants resturants={resturants} setresturants={setresturants}/> */}
    </div>
  )
}

export default page
