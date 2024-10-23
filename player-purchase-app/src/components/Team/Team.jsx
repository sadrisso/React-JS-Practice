

const Team = ({team}) =>
{
    console.log(team)

    const {thumbnailUrl} = team

    return (
        <div>
            <h2>Name: {thumbnailUrl}</h2>
        </div>
    );
};

export default Team;