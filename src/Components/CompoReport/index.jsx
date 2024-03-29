import Card from "../Dashboard/Card";
import Title from "../UIComponents/Title/Title";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { IoHappyOutline } from "react-icons/io5";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";


export default function CompoReport () {
  return(
    <div className="bg-white p-8 w-full">
      <Title title={'Relatórios'} />
      <div className=" mt-5 flex flex-wrap gap-5 justify-center">
        <Card icon={<MdOutlineSupervisorAccount />} description={'Receita de co-produção'} />
        <Card icon={<FiTrendingUp />}  description={'Receita por produto'} />
        <Card icon={<IoCartOutline />} description={'Vendas abandonadas'} />
        <Card icon={<IoHappyOutline />} description={'Engajamento dos alunos'} />
        <Card icon={<FaPersonCirclePlus />} description={'Receita por afiliado'} />
        <Card icon={<FaMoneyCheckAlt />} description={'Saldo a receber'} />
        
      </div>
    </div>

  )
}