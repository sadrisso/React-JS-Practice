import PropTypes from "prop-types"

const Sidebar = ({recipeQueue}) => {

    const handlePreparing = (recipe) => {
        console.log(recipe)
    }

    return (
        <div className="md:w-1/3 text-center space-y-5 border p-2 rounded-xl">
            <h2 className="text-2xl">Total Recipies: {recipeQueue.length}</h2>

            <div className="">
                <table className="table ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calore</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeQueue.map((recipe, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparing_time}min</td>
                                <td>{recipe.calories}</td>
                                <td><button className="btn btn-xs bg-[#0BE58A]" onClick={() => handlePreparing(recipe)}>Preparing</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                
            </div>
        </div>
    );
};


Sidebar.propTypes = {
    recipeQueue: PropTypes.array
}

export default Sidebar;