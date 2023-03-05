import axios from 'axios';
import Cookies from 'js-cookie'

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://contact-list-bakend-production.up.railway.app';

const cook = Cookies.get('token')

export const getUsers = async (id) => {
    id = id || '';
    console.log('This is Cookie ' + cook)
    if (id === '')
        return await axios.get(`${usersUrl}/${cook}`);
    else
        return await axios.get(`${usersUrl}/${id}/${cook}`);
}

export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add/${cook}`, user);
}

export const loginUser = async (user) => {
    return await axios.post(`${usersUrl}/login`, user);
}

export const registerUser = async (user) => {
    return await axios.post(`${usersUrl}/register`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}/${cook}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}/${cook}`, user)
}