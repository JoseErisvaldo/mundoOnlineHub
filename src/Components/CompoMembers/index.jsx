
import { IoIosSearch } from "react-icons/io";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import FotterTable from "../UIComponents/FotterTable";
import Guide from "../UIComponents/Guide";



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
        <FotterTable/>
      </div>
      <Guide topic={'a area de membro'}/>
    </div>


  )
}