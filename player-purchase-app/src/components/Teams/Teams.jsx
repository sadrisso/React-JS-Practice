import { useEffect, useState } from "react";
import Team from "../Team/Team";

const Teams = () =>
{

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(res => res.json()).then(data => setTeams(data))
    }, []);

    console.log(teams);

    return (
        <div>
            <h2>Teams Component</h2>
            {teams.map((team, idx) => <Team key={idx} team={team}></Team>)}
        </div>
    );
};

export default Teams;