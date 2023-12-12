import { NavLink, Navigate, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Sidebar } from "keep-react";

const Dashboard = () => {


    const [isAdmin] = useAdmin();

    const { logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => <Navigate to='/'></Navigate>)
            .catch(error => console.log(error))
    }

    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-violet-700">
                {
                    isAdmin ? <><Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.ItemGroup>
                            <NavLink to="/dashboard/admin">
                                <Sidebar.Item >
                                    Admin Dashboard
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/manage">
                                <Sidebar.Item >
                                    Manage Users
                                </Sidebar.Item>
                            </NavLink>

                            <NavLink to="/dashboard/premeium">
                                <Sidebar.Item >
                                    Approved Premeium
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/dashboard/contact">
                                <Sidebar.Item >
                                    Approved Contact Request
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink to="/">
                                <Sidebar.Item >
                                    Home
                                </Sidebar.Item>
                            </NavLink>
                            <NavLink onClick={handleLogOut}>
                                <Sidebar.Item >
                                    Logout
                                </Sidebar.Item>
                            </NavLink>
                        </Sidebar.ItemGroup>
                    </Sidebar></> :

                        <>
                            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                                <Sidebar.ItemGroup>
                                    <NavLink to="/dashboard/cart">
                                        <Sidebar.Item >
                                            View
                                        </Sidebar.Item>
                                    </NavLink>
                                    <NavLink to="/dashboard/edit">
                                        <Sidebar.Item >
                                            Edit
                                        </Sidebar.Item>
                                    </NavLink>

                                    <NavLink to="/dashboard/mycontact">
                                        <Sidebar.Item >
                                            My contact
                                        </Sidebar.Item>
                                    </NavLink>
                                    <NavLink to="/dashboard/favourites">
                                        <Sidebar.Item >
                                            My Favourites
                                        </Sidebar.Item>
                                    </NavLink>
                                    <NavLink to="/dashboard/success">
                                        <Sidebar.Item >
                                            Success Story
                                        </Sidebar.Item>
                                    </NavLink>
                                    <NavLink to="/">
                                        <Sidebar.Item >
                                            Home
                                        </Sidebar.Item>
                                    </NavLink>
                                    <NavLink onClick={handleLogOut}>
                                        <Sidebar.Item >
                                            Logout
                                        </Sidebar.Item>
                                    </NavLink>
                                </Sidebar.ItemGroup>
                            </Sidebar>
                        </>
                }
            </div>

            <div className="lg:ml-60 ml-20">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;