import PropTypes from "prop-types";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Feature = ({feature}) =>
{
    return (
        <div className="">
            <p className="flex items-center gap-2"><IoCheckmarkCircleOutline className="text-xl text-green-500"/>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string,
}

export default Feature;