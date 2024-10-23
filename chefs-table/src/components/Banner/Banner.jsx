
const Banner = () =>
{


    return (
        <div className="bg-cover bg-no-repeat bg-center rounded-3xl md:w-full h-full md:h-[35.5rem] m-5 mx-auto mb-10 font-[Lexend]" style= {{backgroundImage: 'url(https://i.ibb.co.com/1zqDFxF/chef-1.jpg)'}}>
            <div className="flex flex-col gap-5 justify-center items-center h-full p-5 w-full md:w-2/3 mx-auto text-center font-serif">
                <h1 className="text-4xl md:text-6xl text-white font-extrabold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="space-x-3">
                    <button className="btn">Explore Now</button>
                    <button className="btn">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;