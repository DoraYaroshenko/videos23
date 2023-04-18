import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiMethod } from '../../services/apiService';

export default function AddCategory() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const nav = useNavigate();
  const onSubForm = (_bodyData) => {
    console.log(_bodyData);
    doApiPost(_bodyData);
  }

  const doApiPost = async (_bodyData) => {
    try {
      const url = API_URL + "/categories";
      const data = await doApiMethod(url, "POST", _bodyData);
      if (data._id) {
        toast.success("category added");
        nav("/admin/categories");
      }
    } catch (error) {
      console.log(error);
      alert("there problem");
    }
  }


  return (
    <div className='container'>
      <h1>Add new category form</h1>
      <form onSubmit={handleSubmit(onSubForm)} className="col-md-6 border p-2" >
        <label>name</label>
        <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.name && <div className="text-danger">* Enter valid name</div>}
        <label>URL code</label>
        <input {...register("url_code", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.url_code && <div className="text-danger">* Enter valid url_code</div>}
        <label>info</label>
        <textarea {...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea"></textarea>
        {errors.info && <div className="text-danger">* Enter valid info</div>}
        <label>Image URL</label>
        <input {...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
        {errors.img_url && <div className="text-danger">* Enter valid img_url</div>}
        <button className='btn btn-success mt-3'>Add new</button>
      </form>
    </div >
  )
}
