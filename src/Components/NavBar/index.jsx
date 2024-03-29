import { Link } from "react-router-dom"

export default function NavBar () {
  return(
    <nav className=" bg-zinc-900 text-white w-56 space-y-2 p-2 h-dvh">
      <Link className="flex items-center space-x-3 p-2 rounded-md bg-[#4A5568]" to={'/'}>
       
        <span>Dashboard</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/produtos'}>
       
        <span>Produtos</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/membros'}>
       
        <span>Área de Membros</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/marketplace'}>
       
        <span>Marketplace</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Meus Afiliados</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Vendas</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
       
        <span>Assinaturas</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Financeiro</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Relatórios</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Colaboradores</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Apps</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Indique & Ganhe 1.5%</span>
      </Link>
      <Link className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#4A5568]" to={'/'}>
        
        <span>Ajuda</span>
      </Link>
    </nav>
  )
}