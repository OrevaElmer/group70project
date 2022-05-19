import Home from './pages/home/Home';
import Team from "./pages/team/Team"
import AuthProvider from './context/AuthContext'
import Product from "./pages/product/Product"
import Client from "./pages/client/Client"
import EntryPage from './routes/Routes';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />}/>
          
          <Route path='team' element={<Team />} />
          <Route path='Product' element={<Product />} />
          <Route path='client' element={<Client />} />
        </Routes>
        </AuthProvider>
        <EntryPage />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
