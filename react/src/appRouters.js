import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AuthAdminComp from './admin/authAdminComp'
import AddCategory from './admin/categories/addCategory'
import CategoriesList from './admin/categories/categoriesList'
import EditCategory from './admin/categories/editCategory'
import HeaderAdmin from './admin/headerAdmin'
import LoginAdmin from './admin/loginAdmin'
import UsersList from './admin/usersList'
import Header from './comps_general/header'
import Home from './comps_pages/home'
import Page404 from './comps_pages/page404'

export default function AppRouters() {
  return (
    <BrowserRouter>
    {/* ראוטס שדואג איזה הידר להציג , של צד לקוח או אדמין 
    האזור של ההידר*/}
      <Routes>
        <Route path="/admin/*" element={<HeaderAdmin />} />
        <Route path="/*" element={<Header />} />
      </Routes>
      {/* <Header /> */}
      {/* האזור של העמודים עצמם */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="/admin/categories" element={<CategoriesList />} />
        <Route path="/admin/categories/add" element={<AddCategory />} />
        <Route path="/admin/categories/edit/:id" element={<EditCategory />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Routes>
        {/* בדיקה באזור אדמין , שרק אדמין יוכל להיות באזורים הללו */}
        <Route path="/admin/:dir/*" element={<AuthAdminComp />} />
      </Routes>
      {/* <footer>footer</footer> */}
    </BrowserRouter>
  )
}
