export default function Alert({ alert }) {
  return (
    <div className="z-50 fixed top-20 right-0 bg-blue-600 hover:bg-blue-500 font-bold p-2 m-3 rounded text-white">
      {alert}
    </div>
  );
}
