

export default function Card ({icon,description}) {
  return(
    <div className=" flex items-center w-72 border-2 h-24 p-3 rounded-2xl">
      <strong className="m-2 text-4xl">{icon}</strong>
      <div  className="m-2">{description}</div>
    </div>
  )
}