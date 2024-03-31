// ModalProducts.js
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import supabase from '../../../SupabaseClient';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')

export default function ModalCatalogo({id}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [display, setDisplay] = useState([])
  
  const fecthProduts = () => {
    return new Promise((resolve, reject) => {
      supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .eq('status', true)
      .then(({data, error}) => {
        if(error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }

  const fechtUser = () => {
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
    if(modalIsOpen === true) {
      Promise.all([fecthProduts(),fechtUser()])
    .then(([productsData, userData]) => {

      let productsUser = productsData.map((products) => {
        let user = userData.filter(user => user.user_id === products.user_id)

        return {...products, user}
      })
      setDisplay(productsUser)
      console.log(productsUser)

    })
    }
    
  },[modalIsOpen,id])
  
  return (
    <div>
      <button onClick={openModal}>Detalhes</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=' h-screen flex flex-col gap-7 overflow-y-scroll p-5'>
          <div className='flex justify-between'>
            <h2><strong>Dados do Produto</strong></h2>
            <button onClick={closeModal} className='text-2xl'><IoMdClose /></button>
          </div>
          {display.map((item) => (
            <div key={item.id} className='flex flex-col justify-between gap-3'>
              <div> <strong> Data do Produto:</strong> {new Date(item.created_at).toLocaleDateString()} </div>
              <div> <strong>Titulo:</strong> {item.name} </div>
              <div><strong>Por: </strong> {item.user[0].name} </div>
              <div className=' h-52 w-80 border-2 bg-slate-900'> <img src='dasd' alt={item.name} /> </div>
              <div className='w-80 h-72 overflow-y-scroll'> <strong>Descrição: </strong> {item.description}</div>
              <button className='bg-green-600 hover:bg-green-500 p-3 text-white rounded'>Comprar</button>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
