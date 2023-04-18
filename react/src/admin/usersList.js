import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';

export default function UsersList() {
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    const url = API_URL+"/users/usersList";
    try {
      const data = await doApiGet(url);
      // console.log(data);
      setAr(data);
    } 
    catch (error) {
      console.log(error);  
    }
  }

  const changeRole = async(userInfo) => {
    const newRole = userInfo.role == "admin" ? "user" : "admin";
    try {
      const url = `${API_URL}/users/changeRole/${userInfo._id}/${newRole}`;
      const data = await doApiMethod(url,"PATCH");
      if(data.modifiedCount){
        doApi();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='container'>
      <h1 className='display-4'>List of users in system</h1>
      <table className='table table-striped table-hover table-info'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Birth year</th>
            <th>Nick name</th>
            <th>Role</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.birth_year}</td>
                <td>{item.nickname}</td>
                <td><button style={{background:item.role == "admin" ? "orange" : "silver"}} onClick={() => changeRole(item)}>{item.role}</button></td>
                <td><button className='bg-danger'>X</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
