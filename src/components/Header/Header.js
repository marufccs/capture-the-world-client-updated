import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import './Header.css'

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/services'>Services</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      <li>
        <Link to='/signin'>Sign In</Link>
      </li>
      </ul>
    </div>
    <Link to='/' className="btn header-title btn-ghost normal-case text-cyan-800 text-lg ">Capture The World</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/services'>Services</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      {
        user && user.uid?
        <div className='flex'>
         <li><Link to={`myreviews/${user.email}`}>My Reviews</Link></li>
         <li><Link to='/addservices'>Add Services</Link></li>
         <li onClick={handleLogOut}><Link>Sign Out</Link></li>
          </div>:
          <li><Link to='/signin'>Sign In</Link></li>
      }
    </ul>
  </div>
  <div className="navbar-end  hidden lg:block">
    <Link className='btn bg-cyan-800 contact-us' to='/contactus'>Contact Us</Link>
  </div>
</div>
    );
};

export default Header;