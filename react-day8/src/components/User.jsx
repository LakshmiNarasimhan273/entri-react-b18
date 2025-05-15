import React from 'react';
import { useLoaderData } from 'react-router-dom';

function User() {
    const user = useLoaderData();
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
    </div>
  )
}

export default User

// API CALL - Loaders

// Arrow function
export const userLoader = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if(!response.ok) throw new Error("API Fetching failed!");
    return response.json();
}