import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
       <BrowserRouter>
           <Routes>
               <Route path="/" exact element={<HomePage />} />
           </Routes>
       </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
