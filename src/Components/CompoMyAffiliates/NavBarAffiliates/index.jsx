import NavBar from "../../Navigation/NavBar";

export default function NavBarAffiliates() {
  return (
    <div className="flex gap-3 mb-3">
      <NavBar
        titleNavBar={"Solicitações pendentes"}
        link={"/solicitacoespendentes"}
      />
      <NavBar titleNavBar={"Ativos"} link={"/afiliadosativos"} />
      <NavBar titleNavBar={"Recusados, bloqueados ou cancelados "} />
    </div>
  );
}
