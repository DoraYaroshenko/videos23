import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../../services/apiService';


export default function CategoriesList() {
  const nav = useNavigate();
  const [ar,setAr] = useState([]);

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    const url = API_URL+"/categories";
    try {
      const data = await doApiGet(url);
      // console.log(data);
      setAr(data);
    } 
    catch (error) {
      console.log(error);  
    }
  }

  const deleteItem = async(_delId) => {
    try {
      if(window.confirm("Delete item?")){
        const url = API_URL+"/categories/"+_delId;
        const data = await doApiMethod(url,"DELETE");
        if(data.deletedCount){
          doApi();
        }
      }  
    } 
    catch (error) {
      console.log(error);
      alert("There problem")
    }
  }


  return (
    <div className='container'>
     
      <h1 className='display-4'>List of Categories in system</h1>
      <Link className='btn btn-info my-2' to="/admin/categories/add">Add new category</Link>
      <table className='table table-striped table-hover table-info'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Url code</th>
            <th>Info</th>
            <th>Del/edit</th>
          </tr>
        </thead>
        <tbody>
          {ar.map((item,i) => {
            return(
              <tr key={item._id}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.url_code}</td>
                <td title={item.info}>{item.info && item.info.substring(0,15)}...</td>
                <td>
                  <button onClick={() => {deleteItem(item._id)}} className='bg-danger'>X</button>
                  <button onClick={() => {
                    nav("/admin/categories/edit/"+item._id)
                  }} className='bg-info'>Edit</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
