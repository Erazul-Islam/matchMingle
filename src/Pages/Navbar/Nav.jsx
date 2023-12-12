import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navbar } from "keep-react";

const Nav = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => <Navigate to='/'></Navigate>)
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="w-full text-black">
                <div>
                    <Navbar className="bg-amber-500" fluid={true}>
                        <Navbar.Container className="flex items-center justify-between">
                            <Navbar.Container className="flex items-center">
                                <Navbar.Brand>
                                </Navbar.Brand>
                                <Navbar.Divider></Navbar.Divider>
                                <Navbar.Container
                                    tag="ul"
                                    className="lg:flex hidden items-center justify-between gap-8"
                                >
                                    <li className="text-3xl font-semibold text-blue-600">MatchMingle</li>
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/biodata'>Biodatas</NavLink>
                                    <NavLink to='/about'>About Us</NavLink>
                                    <NavLink to='/contact'>Contact us</NavLink>
                                    <NavLink to='/success'>Got Married</NavLink>
                                    <NavLink to='/dashboard'>Dashboard</NavLink>
                                </Navbar.Container>
                                <Navbar.Collapse collapseType="sidebar">
                                    <Navbar.Container tag="ul" className="flex flex-col gap-5">
                                        <li className="text-3xl">MatchMingle</li>
                                        <NavLink to='/'>Home</NavLink>
                                        <NavLink to='/biodata'>Biodatas</NavLink>
                                        <NavLink to='/about'>About Us</NavLink>
                                        <NavLink to='/contact'>Contact us</NavLink>
                                        <NavLink to='/success'>Got Married</NavLink>
                                        <NavLink to='/dashboard'>Dashboard</NavLink>
                                    </Navbar.Container>
                                </Navbar.Collapse>
                            </Navbar.Container>
                            {
                                user ? <>
                                    <div className="flex mt-32 lg:mt-2 gap-4">
                                        <p className=" lg:mt-2 lg">{user?.displayName}</p>
                                        <img className="rounded-full h-8 w-8" src={user?.photoURL} alt="" />
                                    </div>
                                    <button onClick={handleLogOut} className="h-8 ">Sign Out</button>
                                </>
                                    :
                                    <Link to="/login">
                                        <button className="h-8">Login</button>
                                    </Link>
                            }

                        </Navbar.Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Nav;