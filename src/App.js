import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Routes , Route , Outlet } from "react-router-dom";
import RecipeDetail from "./Pages/RecipeDetail";
import Favorites from "./Pages/Favorites";



function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="recipes/:id" element={<RecipeDetail/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>


      </Routes>
    </div>
  );
}

export default App;
