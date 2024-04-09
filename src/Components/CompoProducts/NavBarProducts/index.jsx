import NavBar from "../../Navigation/NavBar";

export default function NavBarProducts() {
  return (
    <div className="flex gap-3 mb-3">
      <NavBar
        titleNavBar={"Meus produtos"}
        link={"/meusprodutos"}
      />
      <NavBar titleNavBar={"Minhas co-produções"} link={"/minhascoproducaoes"} />
      <NavBar titleNavBar={"Minhas afiliações"} link={"/minhasafiliacoes"} />
    </div>
  );
}
