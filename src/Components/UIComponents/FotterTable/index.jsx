import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function FotterTable () {
  return(

    <div className="flex justify-between items-center mt-4">
      <span className="text-sm">Exibindo 1 de 0 páginas</span>
      <div className="flex space-x-2">
        <button className="px-4" variant="outline">
          <FaChevronLeft className="w-4 h-4" />
        </button>
        <button className="px-4" variant="outline">
            <FaChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>


  )
}