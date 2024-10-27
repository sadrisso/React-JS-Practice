import PropTypes from "prop-types";

const Navbar = ({item}) => 
{

    const {name, path} = item;

    return (
        <div className="">
            <li className="mr-8"> <a href={path}>{name}</a></li>
        </div>
    );
};

Navbar.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Navbar;