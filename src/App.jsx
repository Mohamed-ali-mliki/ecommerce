import { BrowserRouter as Router , Router , Route } from "react-router-dom"

function App() {
  

  return (
    <Router>

    <Route path="/categories" element={<Listscategories/>}/>
     <Route path="/insertcategorie" element={<Insertcategorie/>}/>
  
    </Router>
  
  )
}

export default App
