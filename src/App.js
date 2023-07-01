import HomePage from "./screens/HomePage";
import Login from "./Components/login";
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route} from "react-router-dom";
import Dresses from "./screens/dresses";
import Makeup from './screens/makeup';
import Blazers from './screens/blazer'
import Navbar from "./Components/NavBar";
import Signup from "./screens/signup";

function App()
{

    return (
        <div>
        <Navbar/>

            <>
         <Router>
                <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route  path="/dresses" element={<Dresses />}/>
                <Route  path="/login" element={<Login />}/>
                <Route  path="/creatuser" element={<Signup />}/>
                <Route  path="/blazers" element={<Blazers />}/>
                <Route  path="/makeup" element={<Makeup />}/>

                </Routes>
         </Router>
         </> 
       
  
       </div>

    
    )
}

export default App;

