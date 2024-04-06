import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import supabase from "../../../SupabaseClient";
import Alert from "../../UIComponents/Alert";
import { MdOutlineFavorite } from "react-icons/md";

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

export default function ModalCatalogo({ id, user_id }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [display, setDisplay] = useState([]);
  const [alerta, setAlerta] = useState(false);
  const [idAffiliate, setIdAffiliate] = useState();
  const [contenList, setContenList] = useState(false);
  const [userSolicitation, setUserSolicitation] = useState();
  const [myAnnounce, setMyAnnounce] = useState(false);

  let resId = display.map((item) => {
    return item.user.user_id;
  });
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fecthProduts = () => {
    return supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .eq("status", true)
      .then(({ data, error }) => {
        if (error) {
          throw error;
        } else {
          return data;
        }
      });
  };

  const fechtUser = () => {
    return supabase
      .from("users")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          throw error;
        } else {
          return data;
        }
      });
  };

  useEffect(() => {
    affiliate();
    if (idAffiliate) {
      idAffiliate.map((item) => {
        if (
          item.user_id_request === userSolicitation &&
          item.idproduct === id
        ) {
          setContenList(true);
        }
      });
    }

    if (modalIsOpen) {
      Promise.all([fecthProduts(), fechtUser()])
        .then(([productsData, userData]) => {
          const productsUser = productsData.map((product) => {
            const user = userData.find(
              (user) => user.user_id === product.user_id,
            );
            return { ...product, user };
          });
          let myProducts = productsUser.map((product) => {
            if (product.user_id == userSolicitation) {
              setMyAnnounce(true);
            }
          });

          setDisplay(productsUser);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [modalIsOpen, id]);

  async function affiliate() {
    try {
      const { data, error } = await supabase
        .from("affiliate")
        .select("*")
        .eq("canceled", false)
        .eq("request", true);
      setIdAffiliate(data);
      if (error) throw error;
    } catch (error) {
      console.error("Error handling affiliate:", error);
    }
  }

  async function handleAffiliate() {
    try {
      await supabase.from("affiliate").insert([
        {
          user_id_products: resId[0],
          idproduct: id,
          request: true,
          affiliate: false,
          canceled: false,
        },
      ]);
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
        setModalIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error handling affiliate:", error);
    }
  }

  useEffect(() => {
    let local = localStorage.getItem("sb-ummrcakwdaeufujhnvrv-auth-token");
    let string = JSON.parse(local);
    setUserSolicitation(string.user.id);
  }, []);

  async function handleCanceledAffiliate() {
    try {
      const { error } = await supabase
        .from("affiliate")
        .update({
          canceled: true,
          affiliate: false,
          request: false,
          datecanceled: new Date(),
        })
        .eq("user_id_request", userSolicitation)
        .select();
      setAlerta(true);
      setTimeout(() => {
        setAlerta(false);
        setModalIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error handling affiliate:", error);
    }
  }

  async function viewFavorite() {
    const { data, error } = await supabase.from("productsfavorite").select("*");
    console.log("Favorito", data);
    setIdRequestFavorite(data)
  }

  useEffect(() => {
    viewFavorite();
  }, []);

  async function handleFavorite() {


    const { data, error } = await supabase.from("productsfavorite").insert([
      {
        user_id_products: resId[0],
        idproduct: id,
        favorite: true,
      },
    ]);
  }
  return (
    <div>
      <button onClick={openModal}>Detalhes</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <div className="h-full flex flex-col gap-7">
          {alerta && <Alert alert={"Solicitação Enviada"} />}

          <div className="flex justify-between">
            <h2>
              <strong>Dados do Produto</strong>
            </h2>
            <button onClick={closeModal}>
              <IoMdClose size={24} />
            </button>
          </div>

          {display.map((item) => (
            <div key={item.id} className="flex gap-5">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div>
                    <strong>Data do Produto:</strong>{" "}
                    {new Date(item.created_at).toLocaleDateString()}
                  </div>
                  <div
                    onClick={handleFavorite}
                    className="text-3xl cursor-pointer"
                  >
                    <MdOutlineFavorite />
                  </div>
                </div>
                <div>
                  <strong>Título:</strong> {item.name}
                </div>
                <div>
                  <strong>Por:</strong> {item.user && item.user[0]?.name}
                </div>
                <div>
                  <strong>Tipo:</strong> {item.typeofpayment}
                </div>
                <div className="h-72 overflow-y-auto m-3">
                  <strong>Descrição:</strong> {item.description}
                </div>

                {!contenList && !myAnnounce && (
                  <div className="flex gap-3">
                    <button className="bg-green-600 hover:bg-green-500 p-3 text-white rounded">
                      Comprar
                    </button>
                    <button
                      onClick={handleAffiliate}
                      className="bg-blue-600 hover:bg-blue-500 p-3 text-white rounded"
                    >
                      Solicitar Afiliação
                    </button>
                  </div>
                )}

                {contenList && (
                  <div className="flex gap-3">
                    <button
                      onClick={handleCanceledAffiliate}
                      className="bg-red-600 hover:bg-red-500 p-3 text-white rounded"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
                {myAnnounce && (
                  <div className="bg-yellow-500 border-2 hover:bg-yellow-500 p-3 text-white rounded cursor-pointer">
                    Meu Anuncio
                  </div>
                )}
              </div>

              {/*
              <div className='border-2'>
                <img src='dasd' alt={item.name} className='h-72 w-full object-cover' />
              </div>
              */}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
