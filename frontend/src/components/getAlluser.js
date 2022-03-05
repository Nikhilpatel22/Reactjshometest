import axios from "axios";
//import cookie from "js-cookie";

//let authToken = null;

const url="http://localhost:8080/users";
//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsInVzZXJpZCI6IjYxN2Y3YWNhNTUwZDljODMwMWIyMjU1YSIsImlhdCI6MTYzNTc2NjIxNywiZXhwIjoxNjM1ODUyNjE3fQ.YVPpiW4XIRUixdxFEFbd8Q0lqiYxep_iZ_ZAuCmJnfw';

//const token = user.data.id;
// const token = JSON.parse(localStorage.getItem('data'));

// (function () {
//     if (cookie.get('token') === null) {
//         // This means that there's no JWT and no user is logged in.
//         axios.defaults.headers.common.Authorization = null;
//     } else {
//         // This means that there's a JWT so someone must be logged in.
//         axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
//     }
// }());




export const getUsers = async()=>{
    return await axios.get(url);
}

//let formData = new formdata();
 export const addUser = async(user)=>{
     return await axios.post(`${url}/adduser`,user)
    }
    
export const getusers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

export const deleteUser = async(id)=>{
    return await axios.delete(`${url}/${id}`);
}

export const sendMaill = async()=>{
    return await axios.post(`${url}/sendmail`);
}

// export const loginUsers = async (user) => {
//     return await axios.post(`${url}/loginuser`,user)
// }
// export const editUser = async()=>{
//     return await axios.post(`${url}/${id}`);
// }
