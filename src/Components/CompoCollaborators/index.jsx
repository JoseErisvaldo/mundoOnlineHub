
import { IoIosSearch } from "react-icons/io";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import FotterTable from "../UIComponents/FotterTable";
import Guide from "../UIComponents/Guide";
import Btn from "../UIComponents/Btn";



export default function CompoCollaborators () {

  const colaboradores = [
    {name: 'Aluno', type: 'text', placeholder:'Buscar...'}
  ]

  const data = [
    { EMAIL: 'thor@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'odin@gmail.com', STATUS: 'Inativo', CONVITE: '29/03/2024'},
    { EMAIL: 'loki@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'freyja@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'sif@gmail.com', STATUS: 'Inativo', CONVITE: '29/03/2024'},
    { EMAIL: 'balder@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'frigg@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'heimdall@gmail.com', STATUS: 'Inativo', CONVITE: '29/03/2024'},
    { EMAIL: 'skadi@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'},
    { EMAIL: 'fenrir@gmail.com', STATUS: 'Ativo', CONVITE: '29/03/2024'}
];
  

  return(
    <div className="bg-white p-8 w-full">
      <Title title={'Colaboradores'}/>
      <div className="mt-4">
        <div className="flex justify-between items-center space-x-2">
          <div className=" flex border p-2 gap-3">
            <GenericForm fields={colaboradores} />
            <button variant="secondary">
            <IoIosSearch className="w-4 h-4" />
            </button>
            
          </div>
          <Btn btn={'Adicionar colaborador'} />
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