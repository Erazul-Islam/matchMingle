import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Nav></Nav>
        </div>
    );
};

export default Root;