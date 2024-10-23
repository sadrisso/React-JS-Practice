import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes.jsx/OurRecipes";
import Recipies from "./components/Recipies/Recipies";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [removedRecipe, setRemovedRecipe] = useState([]);

  const handleRemove = (id) => {
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    const updateQueue = recipeQueue.filter((recipe) => recipe.recipe_id !== id);

    setRemovedRecipe([...removedRecipe, deletedRecipe]);
    setRecipeQueue(updateQueue)
  }

  const handleRecipeQueue = (recipe) => {
    const existRecipeQueue = recipeQueue.find((existRecipe) => existRecipe.recipe_id === recipe.recipe_id);

    if(!existRecipeQueue) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert("Recipe Queue Already Exist")
    }

  }

  return (
    <div className="container mx-auto py-3 font-[Lexend]">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      <section className="md:flex mt-10">
        <Recipies handleRecipeQueue={handleRecipeQueue}></Recipies>
        <Sidebar recipeQueue={recipeQueue} handleRemove={handleRemove} removedRecipe={removedRecipe}></Sidebar>
      </section>
    </div>
  );
};

export default App;