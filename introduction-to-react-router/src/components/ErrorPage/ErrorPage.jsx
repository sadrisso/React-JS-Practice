import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <h2>Ooppss!!</h2>
            <Link to="/"><button className="btn btn-secondary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;