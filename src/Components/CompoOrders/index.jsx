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

export default function CompoOrders () {
  const input = [
    {
      type: 'input'
    }
  ]

  let dados = [
    {"DATA": "2024-03-01", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 1", "STATUS": "Ativo", "VALOR LÍQUIDO": 1000},
    {"DATA": "2024-03-02", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 2", "STATUS": "Ativo", "VALOR LÍQUIDO": 1500},
    {"DATA": "2024-03-03", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 3", "STATUS": "Inativo", "VALOR LÍQUIDO": 1200},
    {"DATA": "2024-03-04", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 4", "STATUS": "Ativo", "VALOR LÍQUIDO": 1800},
    {"DATA": "2024-03-05", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 5", "STATUS": "Inativo", "VALOR LÍQUIDO": 1350},
    {"DATA": "2024-03-06", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 6", "STATUS": "Ativo", "VALOR LÍQUIDO": 1700},
    {"DATA": "2024-03-07", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 7", "STATUS": "Ativo", "VALOR LÍQUIDO": 1100},
    {"DATA": "2024-03-08", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 8", "STATUS": "Inativo", "VALOR LÍQUIDO": 1250},
    {"DATA": "2024-03-09", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 9", "STATUS": "Ativo", "VALOR LÍQUIDO": 1600},
    {"DATA": "2024-03-10", "PRODUTO": "REACT + TAILWIND CSS", "CLIENTE": "Cliente 10", "STATUS": "Ativo", "VALOR LÍQUIDO": 1400}
]

  
  return(
    <div className="webkit bg-white p-8 w-full overflow-x-scroll h-screen">
      <div className='flex items-center justify-between'>
        <Title title={'Vendas'}/>
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
        <CardOrders title={'Vendas encontradas'} result={'1596'}/>
        <CardOrders title={'Valor líquido'} result={'R$ 120.596,69'}/>
      </div>
      <div className='flex gap-3'>
        <NavBar titleNavBar={'Aprovados'} />
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