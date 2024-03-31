import { PasswordInput } from "prime-react";
import React, { createContext, useEffect, useState } from "react";
import supabase from "../../SupabaseClient";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

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
    console.log('Erro ao logar !')
  }
    console.log(data)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    navigate('/')
  }

  return(
    <AuthContext.Provider value={({autenticado: !!user, user, logout, login})} >
      {children}
    </AuthContext.Provider>
  )
}