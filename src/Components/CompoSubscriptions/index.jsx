import Export from '../UIComponents/Export/index.jsx'
import GenericForm from '../UIComponents/Form/GenericForm.jsx'
import Title from '../UIComponents/Title/Title.jsx'
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import CardOrders from '../Dashboard/CardOrders/index.jsx';
import NavBar from '../Navigation/NavBar/index.jsx';
import Table from '../UIComponents/Table/table.jsx';
import FotterTable from '../UIComponents/FotterTable/index.jsx';
import Guide from '../UIComponents/Guide/index.jsx'

export default function CompoSubscriptions () {
  const input = [
    {
      type: 'input'
    }
  ]

  let dados = [
    {"DATA INICIO": "29/03/2024", "PRODUTO": "HTML/CSS & JAVA SCRIPT", "CLIENTE": "Cliente 1", "STATUS": "Ativo", "VALOR LÍQUIDO": 1000},
]

  
  return(
    <div className="webkit bg-white p-8 w-full ">
      <div className='flex items-center justify-between'>
        <Title title={'Assinaturas'}/>
        <Export />
      </div>
      <div className='mt-6 flex justify-between border-2 rounded gap-3 p-2'>
        <div className='w-full flex items-center cursor-pointer'>
          <span className='text-1xl'>
            <IoIosSearch />
          </span>
          <span className='w-full '>
            <GenericForm fields={input}/>
          </span>
        </div>
        <div className='flex items-center cursor-pointer'>
          <span className='text-1xl'>
            <MdOutlineFilterAlt />
          </span>
          <span>
            Filtros
          </span>
          
        </div>
      </div>
      <div className='mt-6 flex flex-wrap gap-5'>
        <CardOrders title={'Assinaturas ativas'} result={'1'}/>
        <CardOrders title={'Faturamento recorrente mensal'} result={'R$ 1.000'}/>
      </div>
      <div className='flex gap-3'>
        <NavBar titleNavBar={'Ativos'} />
        <NavBar titleNavBar={'Cancelados'} />
        <NavBar titleNavBar={'Todas'} />
      </div>
      <div className='mt-6 overflow-x-scroll'>
        <Table data={dados} />
      </div>
      <FotterTable />
      <div>
        <Guide topic={'as vendas'} />
      </div>
    </div>

  )
}