

const Header = () => {
    return (
        <div className="mt-10 bg-red-300 p-8">
            <nav className="text-3xl">
                <a href="/" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">Home</a>
                <a href="/about" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">About</a>
                <a href="/contact" className="mr-6 cursor-pointer bg-gray-400 p-2 rounded-xl">Contact</a>
            </nav>
        </div>
    );
};

export default Header;