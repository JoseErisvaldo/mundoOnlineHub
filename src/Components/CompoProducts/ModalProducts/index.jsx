// ModalProducts.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import GenericForm from '../../UIComponents/Form/GenericForm';
import supabase from '../../../SupabaseClient';
import { useNavigate } from 'react-router-dom';

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

Modal.setAppElement('#root');

const initialFormValues = {
  name: '',
  description: '',
  price: '',
  announcement: '',
  status: true,
  typeofpayment: '',
  contentdelivery: ''
};

const typeOptions = [
  { value: 'Tipo de pagamento', label: 'Tipo de pagamento' },
  { value: 'Pagamento Unico', label: 'Pagamento Único' },
  { value: 'Assinatura Recorrente', label: 'Assinatura Recorrente' }
];

const deliverOptions = [
  { value: 'Entrega do conteúdo', label: 'Entrega do conteúdo' },
  { value: 'Área de membros', label: 'Área de membros' }
];

export default function ModalProducts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormValues);
  const navigate = useNavigate()

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  async function handleFormSubmit (e){
    
  const { data, error } = await supabase
    .from('products')
    .insert([
      e
    ])
    .select()
            
    if (data === null) {
      alert('Error ao criar produto !!')
    } else {
      console.log(e)
      navigate('/produtos')
      closeModal();
    }
    
  };

  
  return (
    <div>
      <button onClick={openModal}>Criar Produto</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex flex-col gap-7'>
          <div className='flex justify-between'>
            <h2><strong>Criar produto</strong></h2>
            <button onClick={closeModal} className='text-2xl'><IoMdClose /></button>
          </div>
          <div className='flex flex-col justify-between gap-3'>
            <GenericForm
              onSubmit={handleFormSubmit}
              fields={[
                { label: 'Tipo de pagamento', type: 'select', name: 'typeofpayment', options: typeOptions },
                { label: 'Entrega do conteúdo', type: 'select', name: 'contentdelivery', options: deliverOptions },
                { label: 'Nome do Produto', type: 'input', name: 'name' },
                { label: 'Descrição', type: 'input', name: 'description' },
                { label: 'Preço', type: 'number', name: 'price' }
              ]}
              initialValues={formData}
              submit="Criar Produto"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
