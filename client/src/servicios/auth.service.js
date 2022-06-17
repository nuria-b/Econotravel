import axios from 'axios';

export const authService = {
    login(user){
    console.log(process.env.REACT_APP_BASE_URL+"/login")
       return axios.post(process.env.REACT_APP_BASE_URL+"/login",user);
    },
    register(user){
        return axios.post(process.env.REACT_APP_BASE_URL+"/register",user);
     },
}
