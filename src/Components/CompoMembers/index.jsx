
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";



export default function CompoMembers () {

  const alunos = [
    {name: 'Aluno', type: 'text', placeholder:'Nome do Aluno...'}
  ]

  const data = [
    { NOME: 'José Erisvaldo', PROGRESSO: '0%', PERFIL: 'Detalhes'}
  ]
  

  return(
    <div className="bg-white p-8 w-full">
      <Title title={'Área de Membros'}/>
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <div className=" flex border p-2 gap-3">
            <GenericForm fields={alunos} />
            <button variant="secondary">
            <IoIosSearch className="w-4 h-4" />
          </button>
          </div>
          
        </div>
      </div>

      <div className="mt-6">
        <Table data={data} /> 
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm">Exibindo 0 de 0 páginas</span>
          <div className="flex space-x-2">
            <button className="px-4" variant="outline">
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-4" variant="outline">
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center">
        <FaRegCircle className="w-5 h-5 text-blue-500 mr-2" />
        <a className="text-blue-500 underline" href="#">
          Aprenda mais sobre a área de membros
        </a>
      </div>
    </div>


  )
}