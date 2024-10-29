import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div className="container mx-auto p-4 flex flex-col justify-center items-center">
            <Header/>
                <h1 className="text-5xl font-mono">This is home</h1>
                <Outlet />
            <Footer/>
        </div>
    );
};

export default Home;