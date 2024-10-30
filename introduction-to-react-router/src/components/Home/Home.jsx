import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SimpleForm from "../SimpleForm/SimpleForm";

const Home = () => {
    return (
        <div className="text-center">
            <Header />
                <Outlet/>
                <SimpleForm/>
            <Footer />
        </div>
    );
};

export default Home;