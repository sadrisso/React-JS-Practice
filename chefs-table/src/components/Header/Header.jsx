
const Header = () =>
{


    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-5 md:space-y-0 mb-10 font-[Lexend]">
            <div>
                <h1 className="text-3xl">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex gap-5 items-center text-xl" >
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Recipe</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                <i className="fa-solid fa-user-tie text-3xl"></i>
            </div>
        </div>
    );
};



export default Header;