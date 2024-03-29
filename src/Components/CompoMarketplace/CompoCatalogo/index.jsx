
export default function CompoCatalogo () {
  const cursosTecnologia = [
    {
        title: 'Curso de JavaScript Avançado',
        price: 89.99,
        vendedor: 'CodeMaster Academy'
    },
    {
        title: 'Curso de Python para Iniciantes',
        price: 79.99,
        vendedor: 'Pythonic University'
    },
    {
        title: 'Curso Completo de Java',
        price: 99.99,
        vendedor: 'Java Pro'
    },
    {
        title: 'Curso de C++ Essencial',
        price: 109.99,
        vendedor: 'C++ Experts'
    },
    {
        title: 'Curso de Ruby on Rails',
        price: 69.99,
        vendedor: 'Ruby Inc.'
    },
    {
        title: 'Curso de Swift para Desenvolvimento iOS',
        price: 119.99,
        vendedor: 'iOS Academy'
    },
    {
        title: 'Curso de PHP Avançado',
        price: 84.99,
        vendedor: 'PHP Masters'
    },
    {
        title: 'Curso de C# e .NET Core',
        price: 94.99,
        vendedor: '.NET Gurus'
    },
    {
        title: 'Curso de Kotlin para Android',
        price: 109.99,
        vendedor: 'Android Experts'
    },
    {
        title: 'Curso de TypeScript e Angular',
        price: 109.99,
        vendedor: 'Angular School'
    }
];

console.log(cursosTecnologia);


  return(
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
      {cursosTecnologia.map((item) => (
        <div className="grid gap-2 border-2 p-2" key={item.title}>
        <img
          alt="Product 1"
          className="rounded-lg aspect-16/9 object-cover w-full bg-slate-900"
          height={300}
          src="/placeholder.svg"
          width={400}
        />
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
          <div className="">Por<span className="font-semibold" > {item.vendedor}</span> </div>
          <h4 className="font-semibold text-base md:text-lg">R$ {item.price}</h4>
        </div>
        <button className="bg-green-500 rounded h-10 text-white hover:bg-green-400">Add to cart</button>
      </div>
      ))}
      

      


    </div>


  )
}