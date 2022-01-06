import axios from 'axios';

const url = 'http://localhost:8000'

export const authSignup = async (User) => {
    try {
        return await axios.post(`${url}/signup`, User)
    }catch (error) {
        console.log('Error while calling signup api');
    }
}

export const authLogin = async (User) => {
    try {
        return await axios.post(`${url}/login`, User);
    } catch (error) {
        console.log('Error while calling login api');
    }
}