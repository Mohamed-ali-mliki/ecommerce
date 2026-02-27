import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Navbar
import BasicExample from "./components/menu"; // Navbar pour la navigation

// Pages
import Insertcategorie from "./components/categories/Insertcategorie";
import Listscategories from "./components/scategories/Listscategories";
import Updatescategorie from "./components/scategories/Updatescategorie";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticles from "./components/articles/Listarticles";
import Updatearticle from "./components/articles/Updatearticle";

function App() {
  return (
    <Router>
      {/* Navbar visible sur toutes les pages */}
      <BasicExample />

      <Routes>
        {/* Page d'accueil : redirection vers la liste des catégories */}
        <Route path="/" element={<Navigate to="/listscategories" />} />

        {/* Routes des catégories */}
        <Route path="/listscategories" element={<Listscategories />} />
        <Route path="/insertcategorie" element={<Insertcategorie />} />
        <Route path="/updatescategorie/:id" element={<Updatescategorie />} />

        {/* Routes des sous-catégories */}
        <Route path="/scategorieres" element={<Listscategories />} />
        <Route path="/insertscategorieres" element={<Insertcategorie />} />
        <Route path="/updatescategorieres/:id" element={<Updatescategorie />} />

        {/* Routes des articles */}
        <Route path="/articles" element={<Listarticles />} />
        <Route path="/insertarticle" element={<Insertarticle />} />
        <Route path="/updatearticle/:id" element={<Updatearticle />} />
      </Routes>
    </Router>
  );
}

export default App;