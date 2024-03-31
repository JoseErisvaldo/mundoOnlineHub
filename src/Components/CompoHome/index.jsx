import { useEffect, useState } from "react";
import Title from "../UIComponents/Title/Title";

export default function CompoHome () {
  const [email, setEmail] = useState()

  useEffect(() => {
    const localStorange = localStorage.getItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    const string = JSON.parse(localStorange)
    setEmail(string.user.email)

  }, [])
  const username = email?.split('@')[0]

 

  return(
    <div className="bg-white p-8 w-full">
      <Title title={`Olá, ${username} !!`} />
    </div>


  )
}