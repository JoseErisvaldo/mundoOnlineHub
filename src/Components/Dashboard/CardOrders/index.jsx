

export default function CardOrders ({title,result}) {
  return(
    <div className=" w-72 border-2 h-24 p-3 rounded-2xl">
      <strong className="m-2">{title}</strong>
      <div  className="m-2 text-3xl">{result}</div>
    </div>
  )
}