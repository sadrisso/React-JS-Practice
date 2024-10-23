import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipies = () => {

    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch("recipies.json").then((res) => res.json()).then((data) => setRecipies(data))
    }, [])

    console.log(recipies)


    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            {recipies.map((recipe, i) => <Recipe key={i} recipe={recipe}></Recipe>)}
        </div>
    );
};

export default Recipies;