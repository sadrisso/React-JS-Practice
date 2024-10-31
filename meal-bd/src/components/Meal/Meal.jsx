import PropTypes from "prop-types";

const Meal = ({ category }) => {

    const { strCategoryThumb, strCategory, strCategoryDescription } = category;

    return (
        <div>
            <div className="card bg-base-100 border border-yellow-400">
                <figure>
                    <img src={strCategoryThumb} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{strCategory}</h2>
                    <p>{}strCategoryDescription</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Meal.propTypes = {
    category: PropTypes.object,
}

export default Meal;