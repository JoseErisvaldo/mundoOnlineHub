import { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import supabase from "../../SupabaseClient";

export default function Header() {
  const [email, setEmail] = useState()

  useEffect(() => {
    const localStorange = localStorage.getItem('sb-ummrcakwdaeufujhnvrv-auth-token')
    const string = JSON.parse(localStorange)
    setEmail(string.user.email)

  }, [])
  const username = email?.split('@')[0]

  return (
    <div className=" bg-blue-500 flex items-center justify-between p-4 text-white w-full ">
      <div className="flex items-center space-x-4">
        <span className="hidden md:block ml-10">{username}</span>
      </div>
      <div className="flex items-center space-x-4">
        
        <div className="">
          <div className="flex items-center justify-between w-full px-2 gap-5">
            <span>R$ 1k  /</span>
            <span>R$ 10k</span>
          </div>
        </div>
        <IoIosNotificationsOutline className="text-2xl" id="notifications" />
      </div>
    </div>
  );
}
