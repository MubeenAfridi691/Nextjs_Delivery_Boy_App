const { NextResponse } = require("next/server");
const mongoose = require("mongoose");
const foodschema = require("../../../lib/Foodschema");

export async function GET(request,contenta){
    const id=contenta.params.id
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0',{
        newUrlParser: true,});
        const result=  await foodschema.findById({
            _id:id
         
        })
        return NextResponse.json({result,success:true})
}
    
export async function PUT(request, conts) {
    const id = conts.params.id;

    // Parse the request body
    const payload = await request.json();

    try {
        // Connect to MongoDB if not connected
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }

        // Perform the update
        const result = await foodschema.findByIdAndUpdate(id, payload, { new: true });

        if (result) {
            return NextResponse.json({ result, success: true });
        } else {
            return NextResponse.json({ success: false, message: 'Restaurant not found or no changes were made' });
        }

    } catch (error) {
        console.error('Error updating restaurant:', error);
        return NextResponse.json({ success: false, message: 'Failed to update restaurant', error: error.message });
    }
}
