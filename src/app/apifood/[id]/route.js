import mongoose from 'mongoose'
import foodschema from '../../lib/Foodschema'
import { NextResponse } from 'next/server';


export async function GET(request,content){
    const id=content.params.id

    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
  const result=  await foodschema.find({   
    rest_id:id 
  })
   
  return NextResponse.json({result,success:true})



}

    

export async function DELETE(request,content){
    const id=content.params.id
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
    const result=  await foodschema.deleteOne({
      _id:id
    })
    if(result.deletedCount==1){
      return NextResponse.json({success:true})
      return NextResponse.json({result,success:true})
    }
    else{
      return NextResponse.json({success:false})
    }

    


  }