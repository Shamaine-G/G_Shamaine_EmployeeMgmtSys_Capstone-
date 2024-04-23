import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


import HideNav from "./components/HideNav";
import CreateInfo from './pages/CreateInfo';
import ViewAll from './pages/ViewAll';
import Edit from './pages/Edit';
import Delete from './pages/Delete';
import ErrorPage from './pages/ErrorPage';
import Navbar from "./components/Navbar";
import Details from "./pages/Details";
import Login from "./pages/Login";

function App() {
  return (
    
    
    <div>

<HideNav>
      <Navbar/>
</HideNav>

    <Routes>
      <Route path= '/' element={<Login />} />
      <Route path= '/createInfo' element={<CreateInfo />} />
      <Route path= '/delete/:id' element={<Delete />} />
      <Route path= '/edit/:id' element={< Edit />} />
      <Route path= '/details/:id' element={< Details />} />
      <Route path= '/ViewAll' element={< ViewAll />} />
      <Route path= '/*' element={<ErrorPage />} />
    </Routes>

    </div>
      
  )
}

export default App;
