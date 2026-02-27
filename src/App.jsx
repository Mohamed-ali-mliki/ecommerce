import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Catégories
import Insertcategorie from "./components/categories/Insertcategorie";
import Listscategories from "./components/scategories/Listscategories";
import Updatescategorie from "./components/scategories/Updatescategorie";

// Articles (à créer si ce n'est pas déjà fait)
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Updatearticle from "./components/articles/Updatearticle";

function App() {
  return (
    <Router>
      <Routes>
        {/* Catégories */}
        <Route path="/listscategories" element={<Listscategories />} />
        <Route path="/insertcategorie" element={<Insertcategorie />} />
        <Route path="/updatescategorie" element={<Updatescategorie />} />

        {/* Sous-catégories */}
        <Route path="/scategorieres" element={<Listscategories />} />
        <Route path="/insertscategorieres" element={<Insertcategorie />} />
        <Route path="/updatescategorieres" element={<Updatescategorie />} />

        {/* Articles */}
        <Route path="/articles" element={<Listarticles />} />
        <Route path="/insertarticle" element={<Insertarticle />} />
        <Route path="/updatearticle" element={<Updatearticle />} />
      </Routes>
    </Router>
  );
}

export default App;