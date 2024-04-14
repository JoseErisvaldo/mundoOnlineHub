import React from "react";

export default function Alert({ alert, color }) {
  return (
    <div className={`z-50 fixed top-20 right-0 bg-${color}-600 hover:bg-${color}-500 font-bold p-2 m-3 rounded text-white cursor-pointer`}>
      {alert}
    </div>
  );
}
