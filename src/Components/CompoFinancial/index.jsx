import Export from '../UIComponents/Export/index.jsx'
import GenericForm from '../UIComponents/Form/GenericForm.jsx'
import Title from '../UIComponents/Title/Title.jsx'
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import NavBar from '../Navigation/NavBar/index.jsx';
import Table from '../UIComponents/Table/table.jsx';
import FotterTable from '../UIComponents/FotterTable/index.jsx';
import Guide from '../UIComponents/Guide/index.jsx'
import CardFinancial from '../Dashboard/CardFinancial/index.jsx';
import BtnSubmit from '../UIComponents/BtnSubmit/index.jsx';

export default function CompoFinancial () {
  const input = [
    {
      type: 'input'
    }
  ]

  let dados = [
    {"DATA": "29/03/2024", "VALOR": 1000, "STATUS": "Aprovado", }
]

  
  return(
    <div className="webkit bg-white p-8 w-full h-screen">
      <div className='flex items-center  justify-between'>
        <Title title={'Financeiro'}/>
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
        <div className='border-l-8 border-green-500 '>
          <CardFinancial title={'Saldo disponível'} result={'R$ 1.596,69'}/>
        </div>
        <div className='border-l-8 border-orange-500 '>
          <CardFinancial title={'Saldo pendente'} result={'R$ 1.506,63'}/>
        </div>
      </div>
      <BtnSubmit submit={'Efetuar Saque'} />
      <div className='flex overflow-x-scroll gap-3'>
        <NavBar titleNavBar={'Saques'} />
        <NavBar titleNavBar={'Dados Bancario'} />
        <NavBar titleNavBar={'Taxas'} />
        <NavBar titleNavBar={'Indentidade'} />
      </div>
      <div className='mt-6'>
        <Table data={dados} />
      </div>
      <FotterTable />
      <div>
        <Guide topic={'os saques'} />
      </div>
    </div>

  )
}