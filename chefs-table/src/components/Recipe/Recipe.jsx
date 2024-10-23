import PropTypes from "prop-types"


const Recipe = ({recipe, handleRecipeQueue}) => {


    const {recipe_img, recipe_name, short_desc, ingredients, preparing_time, calories} = recipe

    return (
        <div>
            <div className="card bg-base-100 border">
                <figure className="p-5">
                    <img className="w-full h-[200px] rounded-xl" src={recipe_img} alt={recipe_name} />
                </figure>
                <div className="card-body space-y-1">
                    <h2 className="card-title text-xl font-bold">{recipe_name}</h2>
                    <p>{short_desc}</p>

                    <hr />

                    <h3 className="text-xl">Ingredients: {ingredients.length}</h3>
                    {ingredients.map((item, i) => <li key={i}>{item}</li>)}

                    <hr />

                    <div className="flex justify-between px-4">
                        <p><i className="fa-regular fa-clock mr-2"></i>{preparing_time}</p>
                        <p><i className="fa-solid fa-dumbbell mr-2"></i>{calories}</p>
                    </div>

                    <div className="card-actions mt-6">
                        <button className="btn bg-[#0BE58A] rounded-2xl" onClick={() => handleRecipeQueue(recipe)}>Want To Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleRecipeQueue: PropTypes.func,
}

export default Recipe;