import { BrowserRouter as Router , Router , Route } from "react-router-dom"
import Insertcategorie from "./components/categories/Insertcategorie"
import Listscategories from "./components/scategories/Listscategories"
import Updatescategorie from "./components/scategories/Updatescategorie"

function App() {
  

  return (
    <Router>

    <Route path="/listscategories" element={<Listscategories/>}/>
     <Route path="/insertcategorie" element={<Insertcategorie/>}/>
      <Route path="/updatescategorie" element={<Updatescategorie/>}/>
  
    </Router>
  
  )
}

export default App
