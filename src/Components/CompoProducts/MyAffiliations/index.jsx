import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import GenericForm from "../../UIComponents/Form/GenericForm";
import Table from "../../UIComponents/Table/table";
import Title from "../../UIComponents/Title/Title";
import NavBarProducts from "../NavBarProducts"
import FotterTable from "../../UIComponents/FotterTable";
import Guide from "../../UIComponents/Guide";
import ModalProducts from "../ModalProducts";
import supabase from "../../../SupabaseClient";
import { IoReload } from "react-icons/io5";
import ModalMyAffiliates from "../ModalMyAffiliates";

export default function MyAffiliations() {
  const [user, setUser] = useState(null);
  const [affiliateBd, setAffiliateBd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModal, setIsModal] = useState(false)
  const [closeModal, setCloseModal] = useState(false)
  const [dadosModal, setDadosModal] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const localStorangeUser = localStorage.getItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    const localUser = localStorangeUser ? JSON.parse(localStorangeUser) : null
    setUser(localUser)
  }, []);



  const fecthAffiliate = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('affiliate')
      .select('*')
      .eq('user_id_request', user.user.id)
      .eq('request', false)
      .eq('affiliate', true)
      .eq('canceled', false)
      .then(({data, error}) => {
        if(error) {
          reject('Error', error)
        } else {
          resolve(data)
        }
      })
    })
  }

  const fecthProducts = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('products')
      .select('*')
      .then(({data, error}) => {
        if(error) {
          reject('Error', error)
        } else {
          resolve(data)
        }
      })
    })
  }

  const fecthUsers = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('users')
      .select('*')
      .then(({data, error}) => {
        if(error) {
          reject('Error', error)
        } else {
          resolve(data)
        }
      })
    })
  }

  useEffect(() => {
    if (user?.user) {
      
      Promise.all(([fecthAffiliate(),fecthProducts(),fecthUsers()]))
      .then(([affiliateData, productsData, usersData]) => {
        let joinData = affiliateData.map((affiliate) => {
          let products = productsData.filter(products => products.id === affiliate.idproduct)
          let userProducts = usersData.filter(user => user.user_id === affiliate.user_id_products)
          return {...affiliate, products,userProducts}
        })
        setAffiliateBd(joinData)
        setUpdate(false);
        console.log(joinData)
      })

    } else {
      setLoading(false)
    }
  }, [user,update])
  const dataToShow = affiliateBd ? affiliateBd.map(product => ({
    ID: product.id,
    Solicitado: new Date(product.created_at).toLocaleString(),
    Por: product.userProducts[0].name,
    Titulo: product.products[0].name,
    Comissão: product.products[0].price,
    Anuncio: product.statusannouncement ? 'Ativo' : 'Inativo',
    Cancelado: product.canceled ? 'Sim' : 'Não',
    Gerenciar: 'Detalhes'
  })) : []

  function updateProducts() {
    setUpdate(true)
  }

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

  const handleIsModal =  (row, key) => {
    if(key === 'Gerenciar') {
      setIsModal(true)
      setDadosModal(row)
    }
  }
  
  function handleCloseModal () {
    setIsModal(false)
  }

  return (
    <div className="bg-white p-8 w-full">
      <div className="mb-2 flex justify-between">
        <Title title="Produtos" />
        <button className="bg-green-500 p-3 rounded text-white">
          <ModalProducts />
        </button>
      </div>
      <NavBarProducts />

      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2 border p-2">
          <GenericForm fields={inputProducts} />
          <IoMdSearch className="text-gray-500 cursor-pointer" />
        </div>
        <GenericForm fields={field} submit={false} />
      </div>

      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <div onClick={updateProducts} className="cursor-pointer text-2xl"><IoReload /></div>
          <Table data={dataToShow} onCellClick={handleIsModal} />
          <ModalMyAffiliates isModal={isModal} closeModal={handleCloseModal} dados={dadosModal} />
        </div>
      )}

      <FotterTable />
      <Guide topic="os produtos" />
    </div>
  );
}
