import axios from "axios";
const apiUrl ='http://localhost:5000'

export async function getAllUsers(){
 return await axios.get(`${apiUrl}/getAllUsers`)
}
export async function deleteUser(id){
 return await axios.delete(`${apiUrl}/deleteUser/${id}`)
}
export async function getAllUsersByAge(){
 return await axios.get(`${apiUrl}/getUsersByAge`)
}
export async function addUser (userData){
 return await axios.post(`${apiUrl}/addClient`,userData)
}
export async function updateUSer (id,userData){
 return await axios.put(`${apiUrl}/updateUser/${id}`,userData)
}

