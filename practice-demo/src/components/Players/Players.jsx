import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types"
import Player from "../Player/Player";


const Players = ({handleAddPlayers, handleRemovePlayer}) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch("players.json").then((res) => res.json()).then((data) => setPlayers(data))
    }, []);

    console.log(players)


    return (
        <div className="w-2/3">
            <h2 className="text-center text-2xl font-mono mt-5">Players: {players.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 p-5">
                {players.map((player) => <Player key={player.id} player={player} handleAddPlayers={handleAddPlayers} handleRemovePlayer={handleRemovePlayer}></Player>)}
            </div>
        </div>
    );
};


Players.propTypes = {
    handleAddPlayers: PropTypes.func,
    handleRemovePlayer: PropTypes.func
}

export default Players;