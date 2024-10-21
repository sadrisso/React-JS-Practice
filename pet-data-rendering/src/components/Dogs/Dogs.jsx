import { useEffect, useState } from "react";
import Dog from "../Dog/Dog";
import './Dogs.css'
import { addToLS, getStoredCart } from "../../Utilities/localStorage";


const Dogs = () =>
{

    const [dogs, setDogs] = useState([]);
    const [adoptions, setAdoptions] = useState([]);

    const handleAdoption = (dog) =>
    {
        const newAdotion = [...adoptions, dog];
        setAdoptions(newAdotion);
        addToLS(dog.id)
    }

    useEffect(() => {
        fetch('dogs.json').then(res => res.json()).then(data => setDogs(data));
    }, []);

    useEffect(() => {
        if (dogs.length > 0) {
            const storedCart = getStoredCart();
            console.log(storedCart);
        }
    }, [dogs]);

    console.log(dogs);

    return (
        <div>
            <h2>Dogs: {dogs.length}</h2>
            <h3>Adoptions: {adoptions.length}</h3>
            <div className="dogs-container">
                {dogs.map(dog => <Dog key={dog.id} dog={dog} handleAdoption={handleAdoption}></Dog>)}
            </div>
        </div>
    );
};

export default Dogs;