import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const PriceCard = ({ option }) => {

    const { name, price, features } = option

    return (
        <div>
            <div className="card bg-base-100 border rounded-xl h-[400px]">

                <div className="card-body text-left bg-gray-400 rounded-xl">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <div>
                        {features.map((feature, i) => <Feature key={i} feature={feature}/>)}
                    </div>
                    <div>
                        <p className="text-gray-500">${price}</p>
                    </div>
                    <div>
                        <button className="bg-green-500 w-full p-2 rounded-xl ">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

PriceCard.propTypes = {
    option: PropTypes.object,
}

export default PriceCard;