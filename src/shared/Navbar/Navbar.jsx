import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'
import { useContext } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  const links = <>
    <NavLink to='/' className={({ isActive }) => isActive ? ' text-xl font-semibold bg-red-500 text-white rounded-xl p-2' : 'px-2 text-xl font-semibold'}><li >Home</li></NavLink>
    <NavLink to='/addProduct' className={({ isActive }) => isActive ? ' text-xl font-semibold bg-red-500 text-white rounded-xl p-2' : 'px-2 text-xl font-semibold'}><li >Add Product</li></NavLink>

    <NavLink to='/myCart' className={({ isActive }) => isActive ? ' text-xl font-semibold bg-red-500 text-white rounded-xl p-2' : 'px-2 text-xl font-semibold'}><li >My Cart</li></NavLink>

    <NavLink to='/register' className={({ isActive }) => isActive ? ' text-xl font-semibold bg-red-500 text-white rounded-xl p-2' : 'px-2 text-xl font-semibold'}><li >Register</li></NavLink>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <img className="h-28 w-28" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4">
          {links}
        </ul>
      </div>
      {/* logout */}
        <div className="navbar-end">
          <div className='flex items-center gap-2'>
            <Link className=' text-red-500 font-extrabold text-xl hidden sm:block' to="/home">Welcome to Beauty Shop</Link>

            {user ?
              <div className='dropdown dropdown-end' style={{ zIndex: 1000 }}>
                <div className="tooltip tooltip-left" data-tip={user.displayName}>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                </div>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      {/* <span className="badge">New</span> */}
                    </a>
                  </li>
                  <li> <Link onClick={handleLogOut}>Logout</Link></li>
                </ul>
              </div>
              :
              <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-info' : 'btn btn-warning'}>Login</NavLink>
            }
          </div>

        </div>
    </div>

  );
};

export default Navbar;