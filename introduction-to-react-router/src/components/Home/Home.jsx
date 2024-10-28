import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="text-center">
            <Header/>
            <h1 className="text-4xl mt-20">This is home component</h1>
            <Outlet/>
            <p>Home page</p>
        </div>
    );
};

export default Home;