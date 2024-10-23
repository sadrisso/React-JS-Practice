import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types"
import Recipe from "../Recipe/Recipe";


const Recipies = ({handleRecipeQueue}) => {

    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        fetch("recipies.json").then((res) => res.json()).then((data) => setRecipies(data))
    }, [])


    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            {recipies.map((recipe, i) => <Recipe key={i} recipe={recipe} handleRecipeQueue={handleRecipeQueue}></Recipe>)}
        </div>
    );
};

Recipies.propTypes = {
    handleRecipeQueue: PropTypes.func
}
export default Recipies;