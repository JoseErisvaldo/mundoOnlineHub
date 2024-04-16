// ModalProducts.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { IoMdClose } from "react-icons/io";
import supabase from '../../../SupabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import Btn from '../../UIComponents/Btn';
import Alert from '../../UIComponents/Alert';

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


export default function ModalMyAffiliates({isModal, closeModal, dados}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [alertError, setError] = useState(false)

  const [alertAnnouncementInactive, setAlertAnnouncementInactive] = useState(false)
  const [alertAnnouncementActive, setAlertAnnouncementActive] = useState(false)
  const [alertCanceledAnnouncement, setAlertCanceledAnnouncement] = useState(false)

  const openModal = () => setModalIsOpen(true);

  async function handleStatusAnnouncementInactive () {
    
    const { data, error } = await supabase
      .from('affiliate')
      .update({ statusannouncement: false, datestatusannouncementinactive: new Date() })
      .eq('id', dados.ID)
      .select()
      setAlertAnnouncementInactive(true)
      closeModal()
      setTimeout(() => {
        setAlertAnnouncementInactive(false)
      }, 2000);
  }
  async function handleStatusAnnouncementActive () {
    
  const { data, error } = await supabase
    .from('affiliate')
    .update({ statusannouncement: true, datestatusannouncementactive: new Date() })
    .eq('id', dados.ID)
    .select()
    setAlertAnnouncementActive(true)
    closeModal()
    setTimeout(() => {
      setAlertAnnouncementActive(false)
    }, 2000);
  }
  console.log(dados)
  async function handleCanceledAnnouncement () {
    try {
      const {data, error} = await supabase
    .from('affiliate')
    .update({canceled: true, datecanceled: new Date()})
    .eq('id', dados.ID)
    .select()

    if(data) {
      setAlertCanceledAnnouncement(true)
      closeModal()
      console.log(data)
      setTimeout(() => {
      setAlertCanceledAnnouncement(false)
      }, 2000);
    } else {
      setError(true)
      closeModal()
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
    
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      {alertError && (<Alert alert={'Error na Solicitação !'} color={'red'} />)}


      {alertAnnouncementInactive && (<Alert alert={'Anuncio Inativado !'} color={'red'} />)}
      {alertAnnouncementActive && (<Alert alert={'Anuncio Ativado !'} color={'green'} />)}
      {alertCanceledAnnouncement && (<Alert alert={'Afiliação Cancelada !'} color={'green'} />)}

      <Modal
        isOpen={isModal}
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
            <div><strong>Solicitado:</strong> {dados.Solicitado}</div>
            <div><strong>Titulo:</strong> {dados.Titulo}</div>
            <div><strong>Por:</strong> {dados.Por}</div>
            <div><strong>Comissão:</strong> R$ {dados.Comissão}</div>
            <div>
              <strong>Cancelado: </strong> 
              {dados.Cancelado} 
              {dados.Cancelado === 'Não' ? 
                <div onClick={handleCanceledAnnouncement} className=' bg-yellow-600 p-1 rounded text-white cursor-pointer '>
                Cancelar
                </div> : ''}
            </div>
            <div><strong>Anuncio:</strong> {dados.Anuncio === 'Inativo' ? <button onClick={handleStatusAnnouncementActive} className='bg-green-600 p-2 rounded text-white hover:bg-green-500'>Ativar</button> : <button onClick={handleStatusAnnouncementInactive} className='bg-red-600 p-2 rounded text-white hover:bg-red-500'>Inativar</button> }</div>
            <div className='flex items-center'>
              <strong>Link do Anuncio:</strong> 
              <Link to={`/anuncio/${dados.ID}`}>
                <Btn btn={"Acessar"}/>
              </Link> 
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
