import GenericForm from "../UIComponents/Form/GenericForm";
import Title from "../UIComponents/Title/Title";
import { IoIosSearch } from "react-icons/io";
import CompoCatalogo from "./CompoCatalogo";


export default function CompoMarketplace () {

  let search = [
    {
      type: 'text',
      id: 'Marketplace',
      name: 'Marketplace',
      placeholder: 'Pesquisar...'
    }
  ] 

  return(
    <div className="bg-white p-8 w-full">
      <Title title={'Mais vendidos do Marketplace'}/>
      <div className="m-5 flex gap-1 items-center w-full">
        <div className="border-2 w-full p-2 ">
          <GenericForm fields={search} />
        </div>
        <div className="text-3xl cursor-pointer">
          <IoIosSearch />
        </div>
      </div>
      <CompoCatalogo/>
    </div>


  )
}