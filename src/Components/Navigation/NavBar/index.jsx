export default function NavBar ({titleNavBar}) {
  return(
    <div className="mt-7 flex">
      <button className=" text-blue-600 p-1 rounded">{titleNavBar}</button>
    </div>
  )
}