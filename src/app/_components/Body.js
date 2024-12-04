import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
 function Body() {
  const router = useRouter();

  const [location, setLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [foodDescription, setFoodDescription] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [showFiled, setShowFiled] = useState(false);


  // Fetch available locations
  const getLocation = async () => {
    const response = await fetch('http://localhost:3000/api/customer/location');
    const data = await response.json();
    setLocation(data.message); // Assuming the response has a `message` key
  };

  // Fetch filtered restaurants based on query params
  const fetchRestaurants = async (params) => {
    let url = 'http://localhost:3000/api/customer';

    // Add query parameters dynamically based on the filters
    const queryParams = new URLSearchParams();

    if (params.fooddescription) {
      queryParams.append('fooddescription', params.fooddescription);
    }
    if (params.resturant) {
      queryParams.append('resturant', params.resturant);
    }
    if (params.location) {
      queryParams.append('fooddescription', params.location);
    }

    // Make the API request with the query params
    const response = await fetch(`${url}?${queryParams.toString()}`);
    const data = await response.json();

    if (data.message) {
      setRestaurants(data.message); // Update the state with the fetched restaurants
    }
  };

  // Handle changes in location selection
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setShowFiled(false);
    fetchRestaurants({ location, fooddescription: foodDescription });
  };

  // Handle food description input change
  const handleFoodDescriptionChange = (e) => {
    setFoodDescription(e.target.value);
    fetchRestaurants({ fooddescription: e.target.value, location: selectedLocation });
  };

  // Initial fetch of restaurants and locations
  useEffect(() => {
    getLocation(); // Fetch locations
    fetchRestaurants({}); // Fetch all restaurants initially
  }, []);

  return (
    <>
      <div className='background-img'>
        <div className='input-container'>
          {/* Location Search Input */}
          <input
            onClick={() => setShowFiled(true)}
            value={selectedLocation}
            placeholder='Search Places'
            className='input-location'
          />
          {showFiled && (
            <ul className='location-place'>
              {location.map((item) => (
                <li key={item} onClick={() => handleLocationChange(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* Food Description Search Input */}
          <input
            value={foodDescription}
            onChange={handleFoodDescriptionChange}
            placeholder='Search Restaurants or Food'
            className='input-search'
          />
        </div>
      </div>

      {/* Display Restaurants */}
      <div
        style={{
          width: '90%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div
            onClick={() => router.push('/api/customer/explore/'+restaurant.foodname+'/?ids='+restaurant._id)}
            // onClick={() => router.push(`/api/customer/explore/${restaurant.foodname+'/?ids='+restaurant._id}`)}
              key={restaurant._id}
              style={{
                background: '#fcf403',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexWrap: 'wrap',
                border: '1px solid black',
                borderRadius: '10px',
                margin: '10px',
                padding: '10px',

              }}
            >
              <h2>Name: {restaurant.foodname}</h2>
              <h2>Price: {restaurant.price}</h2>
              <h2>Information: {restaurant.fooddescription}</h2>
              <h2>Contact: +92 {restaurant._id}</h2>
              <h2>Images: {restaurant.foodpath}</h2>
            </div>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
}

export default Body;