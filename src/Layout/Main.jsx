import { Outlet } from "react-router-dom";
import Footer from "../Shared/Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;