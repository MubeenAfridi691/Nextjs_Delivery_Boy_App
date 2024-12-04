import { NextResponse } from 'next/server';  // Correct import for NextResponse
import mongoose from 'mongoose';
import User from '../../lib/UserSchema';

// MongoDB connection (better to separate this into a utility file)

export async function GET(request) {
  try {
    await  mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
    const users = await User.find(); // Get all users
    return NextResponse.json(users); // Return the list of users
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}



export async function POST(request) {
  const payload = await request.json();
  const { email, password, mobile, login } = payload;
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');
  if(payload.Login){
    const user = await User.findOne({ email });
    if (user) {
      if (user.password === password) {
        return NextResponse.json({ success: true, user: user });
      } else {
        return NextResponse.json({ success: false, message: 'Invalid password' });
      }
    } else {
      return NextResponse.json({ success: false, message: 'User not found' });
    }
  }
  try {
    if(!payload.Login){
      const user = await User.create({ email, password, mobile });
      return NextResponse.json({ success: true, user: user, message: 'User created successfully' });
    }

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error processing request', error: error.message });
    
  }
}

