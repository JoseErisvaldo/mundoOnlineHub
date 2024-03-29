
import NavBar from "../Navigation/NavBar";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import { IoSearchOutline } from "react-icons/io5";


export default function CompoMyAffiliates () {

  let search = [
    {
      type: 'text',
      placeholder: 'Buscar...'
    }
  ] 

  let dados = [
    {"DATA": "01/03/2024", "NOME": "João", "PRODUTO": "REACT + TAILWIND CSS", "COMISSÃO": 5, "STATUS": "Ativo"},
    {"DATA": "05/03/2024", "NOME": "Maria", "PRODUTO": "REACT + TAILWIND CSS", "COMISSÃO": 7, "STATUS": "Ativo"},
    {"DATA": "10/03/2024", "NOME": "Pedro", "PRODUTO": "REACT + TAILWIND CSS", "COMISSÃO": 6, "STATUS": "Inativo"},
    {"DATA": "15/03/2024", "NOME": "Ana", "PRODUTO": "REACT + TAILWIND CSS", "COMISSÃO": 8, "STATUS": "Ativo"},
    {"DATA": "20/03/2024", "NOME": "Carlos", "PRODUTO": "REACT + TAILWIND CSS", "COMISSÃO": 5, "STATUS": "Inativo"}
]



  return(
    <div className="bg-white p-8 w-full">
     <Title title={'Meus Afiliado'}/>

      <div className="flex gap-3 mb-3">
         <NavBar titleNavBar={'Ativos'} />
         <NavBar titleNavBar={'Solicitações pendentes'} />
         <NavBar titleNavBar={'Recusados, bloqueados ou cancelados '} />
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between w-60 border p-2">
          <GenericForm fields={search}/>
          <div className="text-1xl cursor-pointer">
          <IoSearchOutline/>
          </div>
        </div>
      </div>
      <div className=" overflow-x-scroll ">
        <Table data={dados} />
      </div>
    </div>
    

  )
}