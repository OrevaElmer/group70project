import Home from './pages/home/Home';
import Team from "./pages/team/Team"
import Login from "./pages/login/Login"
import Product from "./pages/product/Product"
import Client from "./pages/client/Client"

import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'/> 
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login />} />
          <Route path='team' element={<Team />} />
          <Route path='Product' element={<Product />} />
          <Route path='client' element={<Client />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
