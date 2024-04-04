import { useEffect, useState } from "react";
import supabase from "../../SupabaseClient";
import NavBar from "../Navigation/NavBar";
import GenericForm from "../UIComponents/Form/GenericForm";
import Table from "../UIComponents/Table/table";
import Title from "../UIComponents/Title/Title";
import { IoSearchOutline } from "react-icons/io5";

export default function CompoMyAffiliates() {
  const [affiliates, setAffiliates] = useState([]);

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
        setAffiliates(affiliatesData);
        console.log(usersData);
        console.log(productsData);
      },
    );
  }, []);

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
        <Table data={affiliates} />
      </div>
    </div>
  );
}
