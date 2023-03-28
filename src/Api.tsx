import React from 'react'

const API_URL = process.env.REACT_APP_API_URL

export async function getCat() {
    let requestOptions:object = {
        method: 'GET',
        redirect: 'follow'
    };
    
    return await fetch(`${API_URL}products/categories`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
  
}