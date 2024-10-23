

const Header = () => {
    return (
        <div className="flex justify-between p-4">
            <h1 className="text-2xl font-sans">This is logo</h1>
            <ul className="flex gap-4 text-xl font-serif">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Location</li>
            </ul>
        </div>
    );
};

export default Header;