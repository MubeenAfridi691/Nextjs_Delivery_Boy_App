const mongoose = require('mongoose');
const foodSchema = require('../../lib/Foodschema');
const { NextResponse } = require('next/server');



export async function GET(req) {
    let filter = {};
    const query = req.nextUrl.searchParams;
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.igdfg.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0');

    // Handle the 'fooddescription' filter
    if (query.get('fooddescription')) {
      const foodDescription = query.get('fooddescription');
      filter.fooddescription = { $regex: new RegExp(foodDescription, 'i') }; // Case-insensitive match for food description
    }
  
    // Handle the 'resturant' filter
    if (query.get('resturant')) {
      const restaurantName = query.get('resturant');
      filter.foodname = { $regex: new RegExp(restaurantName, 'i') }; // Case-insensitive match for restaurant name
    }
  
    try {
      // Connect to MongoDB
     
  
      // Fetch restaurants based on the filter
      const restaurants = await foodSchema.find(filter);
  
      // Return the result
      return NextResponse.json({ message: restaurants });
    } catch (error) {
      console.error('Database error:', error);
      return NextResponse.json({ message: 'Error fetching restaurants', error: error.message }, { status: 500 });
    }
  }
