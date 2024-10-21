import profile from "../../../knowledge-cafe/images/profile.png"


const Header = () =>
{
    return (
        <div className="flex justify-between py-4">
            <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;