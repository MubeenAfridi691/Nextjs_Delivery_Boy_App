const mongoose = require('mongoose');
const foodschema  = require('../../../lib/Foodschema');

export async function GET(request,content){
    const {id}=content.params
    console.log(id)
    mongoose.connect('mongodb+srv://admin:admin@cluster0.g9x48.mongodb.net/food?retryWrites=true&w=majority')
    const data=await foodschema.findOne({_id:id})

    return Response.json({message:data,success:true})

}