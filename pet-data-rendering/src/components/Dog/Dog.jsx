import './Dog.css'

const Dog = ({dog, handleAdoption}) =>
{
    const {name, png, age, id} = dog;


    return (
        <div className='dog'>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Id: {id}</p>
            <img src={png} alt="" />
            <button onClick={() => handleAdoption(dog)}>Adopt Dog</button>
        </div>
    );
};

export default Dog;