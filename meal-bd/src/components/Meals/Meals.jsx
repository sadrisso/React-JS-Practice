import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {

    const meals = useLoaderData();
    const {categories} = meals

    return (
        <div className="mt-10">
            <h2 className="text-center text-3xl font-bold">Total Meals: {categories.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {categories.map((category, i) => <Meal key={i} category={category}/>)}
            </div>
        </div>
    );
};

export default Meals;