import profile from "../../../knowledge-cafe/images/profile.png"


const Header = () =>
{
    return (
        <div>
            <div className="flex justify-between py-4 px-3">
                <h2 className="text-3xl font-bold">Knowledge Cafe</h2>
                <img src={profile} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;