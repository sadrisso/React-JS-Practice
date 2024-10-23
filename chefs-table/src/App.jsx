import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes.jsx/OurRecipes";
import Recipies from "./components/Recipies/Recipies";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
  return (
    <div className="container mx-auto py-3 font-[Lexend]">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="md:flex mt-10">
        <Recipies></Recipies>
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;