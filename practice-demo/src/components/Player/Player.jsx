import PropTypes from 'prop-types'

const Player = ({player, handleAddPlayers, handleRemovePlayer}) => {

    const {name, id, age, nationality} = player

    return (
        <div className='border border-black p-4 m-4 card bg-slate-200 caret-red-50'>
            <h2 className='text-2xl font-mono font-bold'>{name}</h2>
            <p>{nationality} ID: {id} Age: {age}</p>
            <button className="btn cursor-pointer" onClick={() => handleAddPlayers(player)}>Add</button>
            <button className='btn cursor-pointer' onClick={() => handleRemovePlayer(id)}>Remove</button>
        </div>
    );
};



Player.propTypes = {
    player: PropTypes.object,
    handleAddPlayers: PropTypes.func,
    handleRemovePlayer: PropTypes.func
}

export default Player;