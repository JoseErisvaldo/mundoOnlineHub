import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import SideBar from "./Components/Navigation/SideBar";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Members from "./Pages/Members";
import Marketplace from "./Pages/Marketplace";
import MyAffiliates from "./Pages/MyAffiliates";
import Orders from "./Pages/Orders";
import Subscriptions from "./Pages/Subscriptions";
import Financial from "./Pages/Financial";
import Report from "./Pages/Report";
import Collaborators from "./Pages/Collaborators";
import Dashboard from "./Pages/Dashboard";


export default function RoutesApp () {
  return(
    <BrowserRouter>

      <Header/>
      <div className="flex">
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Products/>} />
          <Route path="/membros" element={<Members/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/meusafiliados" element={<MyAffiliates/>} />
          <Route path="/vendas" element={<Orders/>} />
          <Route path="/assinaturas" element={<Subscriptions/>} />
          <Route path="/financeiro" element={<Financial/>} />
          <Route path="/relatorios" element={<Report/>} />
          <Route path="/colaboradores" element={<Collaborators/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}