import { useEffect, useState } from "react";
import supabase from "../../../SupabaseClient";
import ModalCatalogo from "../ModalCatalogo";

export default function CompoCatalogo () {
  const [catalog, setCatalog] = useState([])
  const fecthProducts = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('products')
      .select('*')
      .then(({data, error}) => {
        if(error) {
          reject(error)
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
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  useEffect(() => {
    Promise.all([fecthProducts(),fecthUsers()])
    .then(([productsData, usersData]) => {
      let joinProducts = productsData.map((products) => {
        let user = usersData.filter(user => user.user_id == products.user_id)
        return {...products, user} 
      })
      setCatalog(joinProducts)

    })
  }, [])



  return(
    <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
      {catalog.map((item) => (
        <div className="grid gap-2 border-2 p-2" key={item.id}>
        <img
          alt="Product 1"
          className="rounded-lg aspect-16/9 object-cover w-full bg-slate-900"
          height={300}
          src="/placeholder.svg"
          width={400}
        />
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-lg md:text-xl">{item.name}</h3>
          <div className="">Por<span className="font-semibold" > {item.user[0].name}</span> </div>
          <h4 className="font-semibold text-base md:text-lg">R$ {item.price}</h4>
        </div>
        
        <button className="bg-green-500 rounded h-10 text-white hover:bg-green-400"><ModalCatalogo id={item.id} /></button>
      </div>
      ))}
      

      


    </div>


  )
}