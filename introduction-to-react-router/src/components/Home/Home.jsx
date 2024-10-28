import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="text-center">
            <Header />
                <Outlet/>
            <Footer />
        </div>
    );
};

export default Home;