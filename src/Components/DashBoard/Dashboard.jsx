import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {


    const isAdmin = true;

    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-violet-700">
                {
                    isAdmin ? <><ul className="menu p-4">
                        <li className="text-"><NavLink to="/dashboard/admin">Admin Dashboard</NavLink></li>
                        <li><NavLink to="/dashboard/manage">Manage Users</NavLink></li>
                        <li><NavLink to="/dashboard/premeium">Approved Premeium</NavLink></li>
                        <li><NavLink to="/dashboard/contact">Approved Contact Request</NavLink></li>
                        <li><NavLink to="/dashboard/bio">LogOut</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul></> : 
                    
                    <><ul className="menu p-4">
                        <li className="text-"><NavLink to="/dashboard/cart">View</NavLink></li>
                        <li><NavLink to="/dashboard/edit">Edit</NavLink></li>
                        <li><NavLink to="/dashboard/mycontact">My contact</NavLink></li>
                        <li><NavLink to="/dashboard/favourites">Favourites</NavLink></li>
                        <li><NavLink to="/dashboard/bio">LogOut</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                    </ul></>
                }
            </div>
            <div className="lg:ml-60 ml-20">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;