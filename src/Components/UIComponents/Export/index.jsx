import { CiImport } from "react-icons/ci";


export default function Export () {
  return(
    <div className="flex items-center justify-between gap-5 p-2 rounded m-2 border-2 w-28 cursor-pointer">
      <span>
        <CiImport />
      </span>
      <em>
        Exportar
      </em>
    </div>
  )
}