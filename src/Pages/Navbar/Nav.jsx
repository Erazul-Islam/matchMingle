import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => <Navigate to='/'></Navigate>)
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/biodata'>Biodatas</NavLink></li>
                            <li><NavLink to='/about'>About Us</NavLink></li>
                            <li><NavLink to='/contact'>Contact us</NavLink></li>
                            <li><NavLink to='/success'>Got Married</NavLink></li>
                            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                        </ul>
                    </div>
                    <p className="text-2xl font-bold">MatchMingle</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/biodata'>Biodatas</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/contact'>Contact us</NavLink></li>
                        <li><NavLink to='/success'>Got Married</NavLink></li>
                        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    </ul>
                </div>
                {
                    user ? <>
                        <div className="flex mt-32 lg:mt-2 gap-4">
                            <p className=" lg:mt-2 lg">{user?.displayName}</p>
                            <img className="rounded-full h-8 w-8" src={user?.photoURL} alt="" />
                        </div>
                        <button onClick={handleLogOut} className="btn- btn-sm">Sign Out</button>
                    </>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Nav;