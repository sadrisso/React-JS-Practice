import { useContext } from "react";
import { counterContext } from "../context/context";

const Button = () =>
{

    const value = useContext(counterContext);

    const {count, setCount} = value;

    return (
        <div>
            <button onClick={() => setCount((count) => count + 2)}>Double</button>
            <p>{count}</p>
        </div>
    );
};

export default Button;