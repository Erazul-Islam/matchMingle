import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-violet-700">
                <ul className="menu p-4">
                    <li className="text-"><NavLink to="/dashboard/cart">View</NavLink></li>
                    <li><NavLink to="/dashboard/edit">Edit</NavLink></li>
                    <li><NavLink to="/dashboard/mycontact">My contact</NavLink></li>
                    <li><NavLink to="/dashboard/favourites">Favourites</NavLink></li>
                    <li><NavLink to="/dashboard/bio">LogOut</NavLink></li>
                </ul>
            </div>
            <div className="ml-60">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;