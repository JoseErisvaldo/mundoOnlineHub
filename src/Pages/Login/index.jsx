import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Components/Context";

export default function Login() {
  const { login, signUpNewUser} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState();
  const [senhaCadastro, setSenhaCadastro] = useState();
  const [cadastro, setCadastro] = useState(false)

  function handleLogin() {
    login(email, senha);
  }

  function handleCadastro() {
    signUpNewUser(emailCadastro, senhaCadastro,nomeCadastro);
    console.log(emailCadastro,senhaCadastro,nomeCadastro)
  }

  function handleRegister () {
    setCadastro(!cadastro)
    console.log(cadastro)
  }



  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {!cadastro && (
        <div className="w-80 border-2 p-10 flex flex-col gap-5">
          <div className="space-y-1 flex justify-between items-center">
            <div className="text-2xl font-bold cursor-pointer text-blue-600">Login</div>
            <div onClick={handleRegister} className="text-2xl font-bold cursor-pointer text-blue">Cadastra-se</div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="username">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="username"
                placeholder="Digite Seu Email"
                required
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password">Senha</label>
              <input
                onChange={(e) => setSenha(e.target.value)}
                id="password"
                required
                type="password"
                placeholder="Digite Sua Senha"
                className="border p-2 rounded"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-500 p-2 rounded text-white"
            >
              Login
            </button>
          </div>
        </div>
      )}
      


      {cadastro && (
        <div className="w-80 border-2 p-10 flex flex-col gap-5">
        <div className="space-y-1 flex justify-between items-center">
          <div onClick={handleRegister} className="text-2xl font-bold cursor-pointer">Login</div>
          <div className="text-2xl font-bold  text-blue-600 " >Cadastra-se</div>
        </div>
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <label htmlFor="nomeCadastro">Nome</label>
            <input
              onChange={(e) => setNomeCadastro(e.target.value)}
              type="text"
              id="nomeCadastro"
              placeholder="Digite Seu Nome"
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="emailCadastro">Email</label>
            <input
              onChange={(e) => setEmailCadastro(e.target.value)}
              type="email"
              id="emailCadastro"
              placeholder="Digite Seu Email"
              required
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="senhaCadastro">Senha</label>
            <input
              onChange={(e) => setSenhaCadastro(e.target.value)}
              id="senhaCadastro"
              required
              type="password"
              placeholder="Digite Sua Senha"
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={handleCadastro}
            className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded text-white"
          >
            Cadastrar
          </button>
        </div>
      </div>
      )}
      
    </div>
  );
}
