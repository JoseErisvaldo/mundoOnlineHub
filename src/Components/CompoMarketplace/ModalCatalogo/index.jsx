import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import supabase from "../../../SupabaseClient";
import Alert from "../../UIComponents/Alert";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

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
  const [isDisabled, setIsDisabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [display, setDisplay] = useState([]);
  const [alert, setAlert] = useState(false);
  const [idAffiliate, setIdAffiliate] = useState([]);
  const [contenList, setContenList] = useState(false);
  const [userSolicitation, setUserSolicitation] = useState();
  const [myAnnounce, setMyAnnounce] = useState(false);
  const [idRequestFavorite, setIdRequestFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [listRemoveFavorite, setListRemoveFavorite] = useState([]);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .eq("status", true);
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  const fetchUser = async () => {
    try {
      const { data, error } = await supabase.from("users").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

  const fetchAffiliate = async () => {
    try {
      const { data, error } = await supabase
        .from("affiliate")
        .select("*")
        .eq("canceled", false)
        .eq('affiliate', true)
        .eq('request', false)
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching affiliate:", error);
      throw error;
    }
  };

  useEffect(() => {
    viewFavorite()
    const fetchData = async () => {
      try {
        const [productsData, userData, affiliateData] = await Promise.all([
          fetchProducts(),
          fetchUser(),
          fetchAffiliate(),
        ]);
        
        setIdAffiliate(affiliateData)

        const productsUser = productsData.map((product) => {
          const user = userData.find((user) => user.user_id === product.user_id);
          return { ...product, user };
        });

        let myProducts = productsUser.some((product) => product.user_id === userSolicitation);

        setMyAnnounce(myProducts);
        setDisplay(productsUser);
        affiliateData.forEach((item) => {
          if (item.user_id_request === userSolicitation && item.idproduct === id) {
            setContenList(true);
          }
        });
        idRequestFavorite.forEach((item) => {
          if(item.user_id_addfavorite === userSolicitation && item.idproduct === id) {
            setListRemoveFavorite(item)
            setIsFavorite(true)
          }
        })


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (modalIsOpen) {
      fetchData();
    }
  }, [modalIsOpen, id, userSolicitation, isFavorite]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("sb-ummrcakwdaeufujhnvrv-auth-token");
    const userData = JSON.parse(localStorageData);
    setUserSolicitation(userData?.user.id);
  }, []);

  const handleFavorite = async () => {
    setIsDisabled(true)
    try {
      await supabase.from("productsfavorite").insert([
        {
          user_id_products: display[0]?.user_id,
          idproduct: id,
          favorite: !isFavorite,
        },
      ]);
      setAlert({message: "Adicionado ao Favorito", color: "green"})
      setTimeout(() => {
        setAlert({message: "", color: ""})
        setModalIsOpen(false)
        setIsDisabled(false)
      }, 2000);
      
    } catch (error) {
      console.error("Error handling favorite:", error);
    }
  };

  const handleRemoveFavorite = async () => {
    setIsDisabled(true)
    try {
      const { error } = await supabase
      .from('productsfavorite')
      .delete()
      .eq('id', listRemoveFavorite.id)

      setAlert({message: "Removido do Favorito !", color: "red"})
      setTimeout(() => {
        setAlert({message: "", color: ""})
        setModalIsOpen(false)
        setIsDisabled(false)
      }, 2000);
      
    } catch (error) {
      console.error("Error handling favorite:", error);
    }
  };

  const handleAffiliate = async () => {
    setIsDisabled(true)
    console.log(isDisabled)
    try {
      await supabase.from("affiliate").insert([
        {
          user_id_products: display[0]?.user_id,
          idproduct: id,
          request: true,
          affiliate: false,
          canceled: false,
        },
      ]);
      setAlert({message: "Solicitação Enviada", color: "blue"})
      setTimeout(() => {
        setAlert({message: "", color: ""})
        setModalIsOpen(false)
        setIsDisabled(false)
        console.log(isDisabled)
      }, 2000);

    } catch (error) {
      console.error("Error handling affiliate:", error);
    }
  };

  const handleCanceledAffiliate = async () => {
    try {
      await supabase
        .from("affiliate")
        .update({
          canceled: true,
          affiliate: false,
          request: false,
          datecanceled: new Date(),
        })
        .eq("id", idAffiliate[0].id)
        .select();
        setAlert({ message: "Cancelamento Enviada !", color: "red" });
        setTimeout(() => {
          setAlert({ message: "", color: "" });
          setModalIsOpen(false);
        }, 2000);

    } catch (error) {
      console.error("Error handling canceled affiliate:", error);
    }
  };

  const viewFavorite = async () => {
    try {
      const { data, error } = await supabase.from("productsfavorite").select("*");
      if (error) throw error;
      setIdRequestFavorite(data);
    } catch (error) {
      console.error("Error viewing favorite:", error);
    }
  };

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
          {alert && <Alert alert={alert.message} color={alert.color} />}

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
                  {!myAnnounce && (
                    !isFavorite ? (
                      <button
                        onClick={handleFavorite}
                        className="text-3xl cursor-pointer"
                        disabled={isDisabled}
                      >
                        <MdOutlineFavoriteBorder />
                      </button>
                    ) : (
                      <button
                        onClick={handleRemoveFavorite}
                        className="text-3xl cursor-pointer"
                        disabled={isDisabled}
                      >
                        <MdOutlineFavorite />
                      </button>
                    )
                  )}
                  
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
                    <Link to={`/carrinho/${item.id}`}>
                    <button className="bg-green-600 hover:bg-green-500 p-3 text-white rounded" disabled={isDisabled}>
                      Comprar
                    </button>
                    </Link>
                    <button
                      onClick={handleAffiliate}
                      className="bg-blue-600 hover:bg-blue-500 p-3 text-white rounded"
                      disabled={isDisabled} 
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
                      disabled={isDisabled}
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
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
