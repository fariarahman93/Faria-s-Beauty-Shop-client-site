import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Layout = () => {
    return (
 <div>
        <div className="max-w-6xl mx-auto">
           <Navbar></Navbar>
        <Outlet></Outlet>
       
     </div>
      <Footer></Footer>
 </div>
    );
};

export default Layout;