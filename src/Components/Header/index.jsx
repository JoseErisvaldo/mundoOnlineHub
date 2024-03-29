
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbProgress } from "react-icons/tb";


export default function Header () {
  return(
    <div className=" bg-blue-500 flex items-center justify-between p-4 text-white w-full">
      <div className="flex items-center space-x-4">
        
        <span>joseerivaldogp@...</span>
      </div>
      <div className="flex items-center space-x-4">
        
        <div className="">
          <div className="flex items-center justify-between w-full px-2 gap-5">
            <span>R$ 5k  /</span>
            <span>R$ 10k</span>
          </div>
        </div>
        <IoIosNotificationsOutline className="text-2xl" id="notifications" />
      </div>
    </div>
  )
}