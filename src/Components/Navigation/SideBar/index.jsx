import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Context";

export default function SideBar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const { logout } = useContext(AuthContext);

  return (
    <div>
      {/* Ícone de menu visível apenas em dispositivos móveis */}
      <div
        className="text-3xl text-white cursor-pointer absolute top-3 left-3 lg:hidden"
        onClick={toggleMenu}
      >
        <IoIosMenu />
      </div>
      {/* Menu principal */}
      <div
        className={`bg-zinc-900 text-white w-56 space-y-2 p-2 h-dvh lg:block ${menuAberto ? "block" : "hidden"}`}
      >
        <Link
          className="flex items-center space-x-3 p-2 rounded-md bg-[#4A5568]"
          to={"/"}
        >
          <span>Inicio</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/dashboard"}
        >
          <span>Dashboard</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/meusprodutos"}
        >
          <span>Produtos</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/membros"}
        >
          <span>Área de Membros</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/marketplace"}
        >
          <span>Marketplace</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/solicitacoespendentes"}
        >
          <span>Meus Afiliados</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/vendas"}
        >
          <span>Vendas</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/assinaturas"}
        >
          <span>Assinaturas</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/financeiro"}
        >
          <span>Financeiro</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/relatorios"}
        >
          <span>Relatórios</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/colaboradores"}
        >
          <span>Colaboradores</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/"}
        >
          <span>Indique & Ganhe 1.5%</span>
        </Link>
        <Link
          onClick={toggleMenu}
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/"}
        >
          <span>Ajuda</span>
        </Link>
        <button
          onClick={logout}
          className=" w-full flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]"
          to={"/"}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
