import { PasswordInput } from "prime-react";
import React, { createContext, useEffect, useState } from "react";
import supabase from "../../SupabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [register, setRegister] = useState(null)


  useEffect(() => {
    const localStorange = localStorage.getItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    if(localStorange) {
      setUser(JSON.parse(localStorange))
      setLoading(true)
      navigate('/')
    } else {
      setLoading(true)
    }
  },[])

  async function login(email,password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if(data.session != null) {
    setUser(email,password)
    navigate('/')
  } else {
    alert('Erro ao logar !')
  }
    console.log(data)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    navigate('/')
  }


 async function signUpNewUser(email, password, name) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    
    if (error) {
      console.error("Erro ao criar conta:", error.message)
      alert('Erro')
      return
    }

    await userTable(data.user.id, email)
    
    setRegister(data)
    } catch (error) {
      console.error("Erro ao criar conta:", error.message)
    }
  }

  async function userTable(userId, email, name) {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert([{ user_id: userId, email: email, name: name }])
      
      if (error) {
        console.error("Erro ao inserir usuário na tabela:", error.message)
        return
      }

      alert("Conta criada") 
    } catch (error) {
      console.error("Erro ao inserir usuário na tabela:", error.message)
    }
  }

  return(
    <AuthContext.Provider value={({autenticado: !!user, user, logout, login, signUpNewUser})} >
      {children}
    </AuthContext.Provider>
  )
}