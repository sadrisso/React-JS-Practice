import PropTypes from "prop-types"
import DisplayPlayer from "../DisplayPlayer/DisplayPlayer";

const SelectedPlayer = ({players}) => {

    console.log(players)

    return (
        <div className="w-1/3 text-center">
            <h2 className="text-2xl font-mono mt-4">Your Players: {players.length}</h2>
            {players.map((player, key) => <DisplayPlayer key={key} player={player}></DisplayPlayer>)}
        </div>
    );
};


SelectedPlayer.propTypes = {
    players: PropTypes.array
}
export default SelectedPlayer;