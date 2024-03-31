import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../Components/Context";

export default function Login () {

  const {login, autenticado} = useContext(AuthContext)

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  function Login () {
    login(email,senha)
  }

  return(
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className=" w-80 border-2 p-10 flex flex-col gap-5">
        <div className="space-y-1">
          <div className="text-2xl font-bold">Login</div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="username">Email</label>
              <input onChange={e => setEmail(e.target.value)} type="email" id="username" placeholder="Digite Seu Email" required className="border p-2 rounded" />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password">Senha</label>
              <input onChange={e => setSenha(e.target.value)} id="password" required type="password" placeholder="Digite Sua Senha" className="border p-2 rounded" />
            </div>
            <button onClick={Login} className="w-full bg-green-600 hover:bg-green-500 p-2 rounded text-white">Login</button>
          </div>
        </div>
        <div className="text-center text-sm">
          <Link className="underline" href="#">
            Esqueceu sua senha?
          </Link>
        </div>
      </div>
    </div>
  )
}