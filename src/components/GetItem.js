const productsDetails = [
  {
    id: "0001",
    title: "Pedals",
    desc: "Mejorá tus tiempos de vuelta con estos pedales de tecnología de punta. Éstos incluyen la tecnología de sensado Hall permitiendo una larga duracion ya que no posee desgaste mecanico, para el freno se utiliza una celda de carga, la cual brinda una sensación de frenado casi tan real como un auto de verdad.",
    img: "../assets/pedals.png",
    price: 35590,
    stock: 15,
  },
  {
    id: "0002",
    title: "Shifter",
    desc: "Nuestra selectora de cambios secuencial permite realizar cambios de marcha de manera precisa, montada sobre rodamientos, permite que su accionar suceda con determinada fuerza aplicada y su retorno sea automatico, resultando en una sensacion muy semejante a la realidad.",
    img: "../assets/shifter.png",
    price: 15680,
    stock: 20,
  },
  {
    id: "0003",
    title: "Handbrake",
    desc: "Freno de mano con celda de carga, ideal para Drift y Rally. Gracias a su celda de carga brinda una respuesta muy precisa y no lineal, que depende de la fuerza aplicada sobre el mismo.",
    img: "../assets/handbrake.png",
    price: 21980,
    stock: 10,
  },
];

const GetItem = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(productsDetails)
    }, 5000)
});

export default GetItem