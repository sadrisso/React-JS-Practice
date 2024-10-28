import PropTypes from "prop-types";


const Navbar = ({item}) =>
{

    const {name, path} = item;

    return (
        <div className="bg-gray-600 pl-3 text-white font-bold text-xl">
            <li className="mr-8"> <a href={path}>{name}</a></li>
        </div>
    );
};

Navbar.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Navbar;