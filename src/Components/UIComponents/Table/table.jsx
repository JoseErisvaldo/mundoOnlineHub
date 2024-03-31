import React from 'react';

// Definição do componente Table
function Table({ data }) {

  if (!data || data.length === 0) {
    return <p>Nenhum dado disponível</p>;
  }
  return (
    <table className='w-full '>
      <thead>
        <tr className='border-b-2'>
          {/* Cria os cabeçalhos da tabela baseados nas chaves do primeiro objeto */}
          {Object.keys(data[0]).map(key => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Mapeia os dados para criar as linhas da tabela */}
        {data.map((row, index) => (
          <tr key={index} className=''>
            {/* Mapeia cada valor do objeto para criar as células */}
            {Object.values(row).map((value, index) => (
              <td key={index} className='text-center cursor-pointer p-3'>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
