import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes.jsx/OurRecipes";


const App = () => {
  return (
    <div className="container mx-auto py-3">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;