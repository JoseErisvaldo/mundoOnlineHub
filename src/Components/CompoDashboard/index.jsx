import ColumnWithDataLabels from "../Dashboard/ColumnWithDataLabels";
import SimplePieChart from "../Dashboard/SimplePieChart";
import Title from "../UIComponents/Title/Title";

export default function CompoDashboard () {
  
 

  return(
    <div className="bg-white p-8 w-full">
      <Title title={'Dashboard'} />
      <div>
        <div className="mt-10">
          <strong>Participação de Vendas por Produto</strong>
          <SimplePieChart />
        </div>
        <div className="mt-10">
          <strong>Vendas Diárias de Produtos</strong>
          <ColumnWithDataLabels />
        </div>
      </div>
    </div>


  )
}