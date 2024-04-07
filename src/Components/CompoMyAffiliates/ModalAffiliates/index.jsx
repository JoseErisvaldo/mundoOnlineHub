import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import Alert from "../../UIComponents/Alert";
import supabase from "../../../SupabaseClient";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    maxWidth: "900px",
    padding: "20px",
  },
};

Modal.setAppElement("#root");

export default function ModalAffiliates({ dados, isModal, closeModal }) {
  const [alerta, setAlerta] = useState(false);

  // Função para fechar o modal
  function handleCloseModal() {
    closeModal();
  }

  async function handleToApprove() {
    const { data, error } = await supabase
      .from("affiliate")
      .update({ request: false, affiliate: true })
      .eq("id", dados.id)
      .select();

    setAlerta(true);
    setTimeout(() => {
      setAlerta(false);
      handleCloseModal();
    }, 3000);
  }
  async function handleReject() {}

  return (
    <div>
      <Modal
        isOpen={isModal}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel=""
      >
        <div className="h-full flex flex-col gap-7">
          {alerta && <Alert alert={"Solicitação Enviada"} />}

          <div className="flex justify-between">
            <h2>
              <strong>Dados do Produto</strong>
            </h2>
            {/* Altere o estado isModal para false quando o botão de fechar for clicado */}
            <button onClick={handleCloseModal}>
              <IoMdClose size={24} />
            </button>
          </div>

          <div>
            <div>
              <strong>Data da Solicitação: </strong> {dados.Solicitacao}
            </div>
            <div>
              <strong>Solicitante: </strong>
              {dados.Solicitante}
            </div>
            <div>
              <strong>Produtos: </strong>
              {dados.Produtos}
            </div>
            <div className="flex gap-5 mt-3 justify-center">
              <div
                onClick={handleToApprove}
                className="bg-green-600 p-2 rounded text-white cursor-pointer hover:bg-green-500"
              >
                Aprovar
              </div>
              <div
                onClick={handleReject}
                className="bg-red-600 p-2 rounded text-white cursor-pointer hover:bg-red-500"
              >
                Rejeitar
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
