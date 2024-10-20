import './Pet.css'
const Pet = ({pet, handleAdopt}) => {

    const {adopted, name, age, image} = pet;

    return (
        <div className='pet'>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{adopted}</p>
            <img src={image} alt="" />
            <button onClick={() => handleAdopt(pet)}>Adopt</button>
        </div>
    );
};

export default Pet;