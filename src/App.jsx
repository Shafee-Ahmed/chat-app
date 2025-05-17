import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SignUp from "./components/SingUp"
import Login from "./components/Login" 
import Home from "./components/Home" 
import './App.css';
function App() {

  return (
    <Router>
      <div >
        <section>                              
            <Routes>                                                                      
               <Route path="/" element={<SignUp/>}/>
               <Route path="/Login" element={<Login/>}/>
               <Route path="/Home/*" element={<Home/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
 )
}

export default App
