import React from 'react'

const API_URL = process.env.REACT_APP_API_URL

const headers = {
    "Content-Type" : "application/json"
}

export async function getCat() {
    let requestOptions:object = {
        method: 'GET',
        redirect: 'follow'
    };
    
    return await fetch(`${API_URL}categories`, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
  
}
export async function addCat(val:string){
    let requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify({title: val})
    }
    return await fetch(`${API_URL}categories`, requestOptions)
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log("error to add category", error))
}
interface updateInterface {id:number, title: string}
export async function updateCat(val:updateInterface){
    const {id, title} = val
    let requestOptions:object = {
        method: 'PUT',
        headers,
        body: JSON.stringify({title})
    }
    return await fetch(`${API_URL}categories/${id}`, requestOptions)
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log("error to update category", error))
}

export async function deleteCat(id: number){
    const requestOptions:object = {
        method: 'DELETE',
        headers,
    }
    return await fetch(`${API_URL}categories/${id}`, requestOptions)
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log("error to delete cat", error))
}
