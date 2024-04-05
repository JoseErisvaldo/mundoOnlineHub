import { useContext, useEffect, useState } from "react";
import supabase from "../../SupabaseClient";
import NavBar from "../Navigation/NavBar";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import { IoSearchOutline } from "react-icons/io5";
import ModalAffiliates from "./ModalAffiliates";

export default function CompoMyAffiliates() {
  const [affiliates, setAffiliates] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    const localStorange = localStorage.getItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    const string = JSON.parse(localStorange)
    setId(string.user.id)

  }, [])

  let search = [
    {
      type: "text",
      placeholder: "Buscar...",
    },
  ];
  const fecthAffiliates = () => {
    return new Promise((resolve, reject) => {
      supabase
        .from("affiliate")
        .select("*")
        .eq('user_id_products', id)
        .eq('request', true)
        .then((data, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(data.data);
          }
        });
    });
  };

  const fecthUsers = () => {
    return new Promise((resolve, reject) => {
      supabase
        .from("users")
        .select("*")
        .then((data, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(data.data);
          }
        });
    });
  };

  const fecthProducts = () => {
    return new Promise((resolve, reject) => {
      supabase
        .from("products")
        .select("*")
        .then((data, error) => {
          if (error) {
            reject(error);
          } else {
            resolve(data.data);
          }
        });
    });
  };

  useEffect(() => {
    Promise.all([fecthAffiliates(), fecthUsers(), fecthProducts()]).then(
      ([affiliatesData, usersData, productsData]) => {
        

        let joinAffiliates = affiliatesData.map((affiliates) => {
          let products = productsData.filter(products => products.id === affiliates.idproduct).map((item) => {
            let userProduct = usersData.filter(userProduct => userProduct.user_id === item.user_id)
            return {...item, userProduct}
          })
          let userRequest = usersData.filter(user => user.user_id === affiliates.user_id_request)
          return {...affiliates, products, userRequest}
        })

        setAffiliates(joinAffiliates);
      },
    );
  }, [id]);

  const dataToShow = affiliates.length > 0 ? affiliates.map((affiliate) => ({
  'Id Solicitação': affiliate.id,
  Solicitacao: new Date(affiliate.created_at).toLocaleString(),
  Produtos: affiliate.products ? affiliate.products.map((product) => product.name) : [],
  Solicitante: affiliate.userRequest[0].name,
  Detalhes: 'Detalhes'
  })) : []
  
  const [isModal, setIsModal] =useState(false)

  const [dados, setDados] =useState(false)

  const handleCellClick = (row, key) => {
    if (key === 'Detalhes') {

      setIsModal(true)
      setDados(row)
    }
  };

  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <div className="bg-white p-8 w-full">
      <Title title={"Meus Afiliado"} />

      <div className="flex gap-3 mb-3">
        <NavBar titleNavBar={"Ativos"} />
        <NavBar titleNavBar={"Solicitações pendentes"} />
        <NavBar titleNavBar={"Recusados, bloqueados ou cancelados "} />
      </div>
      <div className="mb-5">
        <div className="flex items-center justify-between w-60 border p-2">
          <GenericForm fields={search} />
          <div className="text-1xl cursor-pointer">
            <IoSearchOutline />
          </div>
        </div>
      </div>
      <div className=" overflow-x-scroll ">
        <Table data={dataToShow} onCellClick={handleCellClick} />

        <ModalAffiliates dados={dados} isModal={isModal} closeModal={closeModal}/>

        
      </div>
    </div>
  );
}
