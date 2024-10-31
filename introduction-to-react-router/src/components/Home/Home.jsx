import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SimpleForm from "../SimpleForm/SimpleForm";
import RefForm from "../RefForm/RefForm";



const Home = () => {
    return (
        <div className="text-center">
            <Header />
                <Outlet/>
                <SimpleForm/>
                <RefForm/>
            <Footer />
        </div>
    );
};

export default Home;