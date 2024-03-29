import { IoMdSearch } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import NavBar from "../Navigation/NavBar";
import FotterTable from "../UIComponents/FotterTable";
import Guide from "../UIComponents/Guide";



export default function CompoProducts () {

  const handlProdutSubmit = (formData) => {
    console.log(`Dados: ${formData}`)
  }

  const typeProducts = [
    {
      products: 'Todos'
    },
    {
      products: 'Ativo'
    },
    {
      products: 'Inativos'
    }
  ]

  const field = [
    {
      name: 'Tipo',
      type: 'select',
      options: typeProducts.map((item) => ({
        value: item.products,
        label: item.products
      }))
    }
  ]

  const inputProducts = [
    { 
      name: 'Produto',
      type: 'text',
      placeholder: 'Buscar....'
    }
  ]


  const data = [
    { NOME: 'React', PREÇO: 'R$ 50,00', STATUS: 'Ativo' }
  ];

  return(
    <div className="bg-white p-8 w-full">
      <div className="mb-2 flex justify-between">
        <Title title={'Produtos'} />
        <button className="bg-green-500 p-3 rounded text-white">Criar produto</button>
      </div>
      <div className="flex gap-3 mb-6">
        <NavBar titleNavBar={'Meus produtos'} />
        <NavBar titleNavBar={'Minhas co-produções'} />
        <NavBar titleNavBar={'Minhas afiliações'} />
      </div>

      

      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2 border p-2">
          <GenericForm fields={inputProducts} />
          <IoMdSearch className="text-gray-500 cursor-pointer" />
        </div>
        
        <GenericForm onSubmit={handlProdutSubmit} fields={field}/>

      </div>
      <div>
      <h1>Exemplo de Tabela</h1>
        <Table data={data} />
      </div>
      <FotterTable />
      <Guide topic={'os produtos'} />
    </div>

  )
}