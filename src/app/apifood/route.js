const mongoose = require('mongoose');
const foodschema = require('../lib/Foodschema')

export async function GET(request) {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
    const food = await foodschema.find();
    return Response.json({food,success:true});
}

export  async function POST(request) {
   
  await  mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
    const body = await request.json();
    
    const food = new foodschema({
     foodname:body.fooddata.foodname,
        foodprice:body.fooddata.foodprice,
        fooddescription:body.fooddata.fooddescription,
        foodpath:body.fooddata.foodpath,
        rest_id:body.rest_id
       
    })
    const savedfood = await food.save();
    return Response.json({savedfood,success:true});
}