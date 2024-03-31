import React, { useContext, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import NavBar from "../Navigation/NavBar";
import FotterTable from "../UIComponents/FotterTable";
import Guide from "../UIComponents/Guide";
import ModalProducts from "./ModalProducts";
import supabase from "../../SupabaseClient";
import { AuthContext } from "../Context";
import { IoReload } from "react-icons/io5";


export default function CompoProducts() {
  const {user} = useContext(AuthContext)
  const userId = user ? user.user.id : []
  let [productsBd, setProductsBd] = useState([])

  async function loadingProducts() {
    let { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', userId)
    console.log(data)
    if (error) {
      console.error('Erro ao carregar produtos:', error.message)
    } else {
      setProductsBd(data);
    }
  }
  useEffect(() => {
    loadingProducts();
  }, []);
  
  const dataToShow = productsBd.length > 0 ? productsBd.map(product => ({
    ID: product.id,
    Nome: product.name,
    Preço: `R$ ${product.price}`,
    Status: product.status === true ? 'Ativo' : 'Inativo'
  })) : []


  const typeProducts = [
    { value: "Todos", label: "Todos" },
    { value: "Ativo", label: "Ativo" },
    { value: "Inativos", label: "Inativos" }
  ];

  const field = [
    {
      name: "Tipo",
      type: "select",
      options: typeProducts
    }
  ];

  const inputProducts = [
    {
      name: "Produto",
      type: "text",
      placeholder: "Buscar...."
    }
  ];

  function updateProducts () {
    loadingProducts()
  }
  return (
    <div className="bg-white p-8 w-full">
      <div className="mb-2 flex justify-between">
        <Title title="Produtos" />
        <button className="bg-green-500 p-3 rounded text-white">
          <ModalProducts />
        </button>
      </div>
      <div className="flex gap-3 mb-6">
        <NavBar titleNavBar="Meus produtos" />
        <NavBar titleNavBar="Minhas co-produções" />
        <NavBar titleNavBar="Minhas afiliações" />
      </div>

      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2 border p-2">
          <GenericForm fields={inputProducts}  />
          <IoMdSearch className="text-gray-500 cursor-pointer" />
        </div>

        <GenericForm fields={field} submit={false} />
      </div>
      <div>
        <div onClick={updateProducts} className="cursor-pointer text-2xl"><IoReload /></div>
        <Table data={dataToShow} />
      </div>
      <FotterTable />
      <Guide topic="os produtos" />
    </div>
  );
}
