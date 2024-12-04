import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import foodschema from '@/app/lib/Foodschema';

export async function GET(req) {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
  const resturants = await foodschema.find();

  const result = resturants.map((resturant) => 
    resturant.fooddescription ? resturant.fooddescription.charAt(0).toUpperCase() + resturant.fooddescription.slice(1) : ''
  );

  const uniqueDescriptions = [...new Set(result)];

  return NextResponse.json({ message: uniqueDescriptions });
}
