import { FaRegCircle } from "react-icons/fa";

export default function  Guide ({topic}) {
  return(
    <div className="mt-6 flex items-center">
      <FaRegCircle className="w-5 h-5 text-blue-500 mr-2" />
      <a className="text-blue-500 underline cursor-pointer" href="#">
         Aprenda mais sobre {topic}
      </a>
    </div>
  )
}