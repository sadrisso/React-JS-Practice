import { useEffect, useState } from "react";
import Pet from "../Pet/Pet";
import './Pets.css'

const Pets = () => {

    const [pets, setPets] = useState([]);
    const [adopt, setAdopt] = useState([]);

    const handleAdopt = (pet) => {
        console.log(pet)
        const newAdopt = [...adopt, pet];
        setAdopt(newAdopt);
    }


    useEffect(() => {
        fetch('../../../public/data.json').then((res) => res.json()).then((data) => setPets(data))
    }, []);


    return (
        <div>
            <h2>Pets: {pets.length}</h2>
            <h2>Adoption: {adopt.length}</h2>
            <div className="pet-container">
                {pets.map((pet) => <Pet key={pet.id} pet={pet} handleAdopt={handleAdopt}></Pet>)}
            </div>
        </div>
    );
};

export default Pets;