import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TOKEN_KEY } from '../services/apiService';

export default function HeaderAdmin() {
  const nav = useNavigate()

  const onLogOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    nav("/admin")
    toast.info("You logged out, see you soon...");
  }

  return (
    <header style={{ background: "orange" }} className='container-fluid'>
      <div className="container  ">
        <div className="row  align-items-center">

          <div className='logo col-auto'>
            <h2 className='h3'>Admin</h2>
          </div>
          <nav className='col d-flex justify-content-between align-items-center'>
            <ul>
              {localStorage[TOKEN_KEY] &&
                <React.Fragment>
                  <li><Link to="/admin/users">Users</Link></li>
                  <li><Link to="/admin/categories">Categories</Link></li>
                  <li><Link to="/admin/videos">Videos</Link></li>
                </React.Fragment>
              }
            </ul>
            <div>
              {localStorage[TOKEN_KEY] &&
                <button onClick={onLogOut} className='btn btn-danger'>Log out</button>
              }
            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}
