import PropTypes from "prop-types"

const DisplayPlayer = ({player}) => {

    const {name, nationality} = player

    return (
        <div className="bg-gray-300 p-5 mb-4">
            <ol>
                <li className="text-2xl font-mono">{name} Nationality: {nationality}</li>
            </ol>
        </div>
    );
};

DisplayPlayer.propTypes = {
    player: PropTypes.object
}

export default DisplayPlayer;