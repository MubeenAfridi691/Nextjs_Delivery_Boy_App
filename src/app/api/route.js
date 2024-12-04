import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import foodSchema from '../lib/Foodschema';

export  async function GET() {
  await  mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0')

  const resturants = await foodSchema.find({}).lean();


 return NextResponse.json({ message: resturants }); 
}









export async function POST(request) {
  try {
    const payload = await request.json();
      await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');


    if (payload.login) {
      const user = await Resturant.findOne({ email: payload.email });
      if (user) {
        if (user.password === payload.password) {
          return NextResponse.json({ success: true, user: user });
        } else {
          return NextResponse.json({ success: false, message: 'Invalid password' });
        }
      } else {
        return NextResponse.json({ success: false, message: 'User not found' });
      }
    } else {
      const resturant = await Resturant.create(payload);
      return NextResponse.json({ success: true, user: resturant, message: 'User created successfully' });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error processing request', error: error.message });
  }
}

