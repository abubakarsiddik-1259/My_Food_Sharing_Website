import { Outlet } from "react-router";
import Navbar from "../../Component/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#D9D9D9]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;