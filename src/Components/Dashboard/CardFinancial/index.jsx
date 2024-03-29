

export default function CardFinancial ({title,result}) {
  return(
    <div className=" w-72 border-2 h-26 p-3 rounded-2xl">
      <strong className="m-2b">{title}</strong>
      <div  className="m-2 text-3xl">{result}</div>
    </div>
  )
}