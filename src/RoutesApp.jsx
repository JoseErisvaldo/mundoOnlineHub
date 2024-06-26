import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "./Components/Context";
import { useContext } from "react";

import Header from "./Components/Header";
import SideBar from "./Components/Navigation/SideBar";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Members from "./Pages/Members";
import Marketplace from "./Pages/Marketplace";
import Orders from "./Pages/Orders";
import Subscriptions from "./Pages/Subscriptions";
import Financial from "./Pages/Financial";
import Report from "./Pages/Report";
import Collaborators from "./Pages/Collaborators";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import AffiliatesActive from "./Components/CompoMyAffiliates/AffiliatesActive";
import AffiliatesPending from "./Components/CompoMyAffiliates/AffiliatesPending";
import Cart from "./Pages/Cart";
import CatalogoProducts from "./Components/CompoProducts/CatalogoProducts";
import MyCoproductions from "./Components/CompoProducts/MyCoproductions";
import MyAffiliations from "./Components/CompoProducts/MyAffiliations";

export default function RoutesApp() {
  const AdminPrivate = ({ children }) => {
    const { autenticado } = useContext(AuthContext);

    if (!autenticado) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminPrivate>
          <Header />
        </AdminPrivate>

        <div className="flex">
          <AdminPrivate>
            <SideBar />
          </AdminPrivate>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <AdminPrivate>
                  {" "}
                  <Home />{" "}
                </AdminPrivate>
              }
            />

            <Route path="/meusprodutos" element={<CatalogoProducts />} />
            <Route path="/minhascoproducaoes" element={<MyCoproductions />} />
            <Route path="/minhasafiliacoes" element={<MyAffiliations />} />

            <Route path="/membros" element={<Members />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route
              path="/solicitacoespendentes"
              element={<AffiliatesPending />}
            />
            <Route path="/afiliadosativos" element={<AffiliatesActive />} />
            <Route path="/vendas" element={<Orders />} />

            <Route path="/carrinho/:id" element={<Cart />} />

            <Route path="/assinaturas" element={<Subscriptions />} />
            <Route path="/financeiro" element={<Financial />} />
            <Route path="/relatorios" element={<Report />} />
            <Route path="/colaboradores" element={<Collaborators />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
