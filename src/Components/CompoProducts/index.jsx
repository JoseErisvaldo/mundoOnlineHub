import { IoMdSearch } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";



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
  let statusTable = 'Ativo'


  return(
    <div className="bg-white p-8 w-full">
      <div className="mb-6 flex justify-between">
        <Title title={'Produtos'} />
        <button className="bg-green-500 p-3 rounded text-white">Criar produto</button>
      </div>
      <div>
        <div className="mb-4 flex gap-3">
          <button className=" bg-slate-600 hover:bg-slate-500 text-white p-2 rounded">Meus produtos</button>
          <button className=" bg-slate-600 hover:bg-slate-500 text-white p-2 rounded" >Minhas co-produções</button>
          <button className=" bg-slate-600 hover:bg-slate-500 text-white p-2 rounded" >Minhas afiliações</button>
        </div>
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
      <div>Exibindo 0 de 0 páginas</div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex space-x-2">
          <button className="px-4" variant="ghost">
            {`<`}
          </button>
          <button className="px-4" variant="ghost">
            {`>`}
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegCircle className="text-blue-500" />
          <Link className="text-blue-500 underline" href="#">
            Aprenda mais sobre os produtos
          </Link>
        </div>
      </div>
    </div>

  )
}