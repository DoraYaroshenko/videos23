import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiGet, TOKEN_KEY } from '../services/apiService';

// comp that check if user is admin and has token
export default function AuthAdminComp() {
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try {
      const url = API_URL+"/users/checkToken";
      const data = await doApiGet(url);
      if(data.role != "admin"){
        // alert("You cant be here (just admin) ");
        toast.error("You cant be here (just admin) ");
        localStorage.removeItem(TOKEN_KEY);
        nav("/admin")
      }
    } catch (error) {
      toast.error("There problem, try login again ");
      // alert("There problem, try login again ");
        nav("/admin");
        localStorage.removeItem(TOKEN_KEY);
      // console.log(error);
    }
  }

  return (
    <React.Fragment></React.Fragment>
  )
}
