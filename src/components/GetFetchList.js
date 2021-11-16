const products = [
  {
    id: "0001",
    title: "Pedals Pro",
    drop: "Enhance your simulator experience.",
    desc: "Heusinkveld presents some of the highest quality, most adjustable and most realistic feeling pedals on the market: Heusinkveld Sim Pedals Ultimate+.",
    img: "../assets/pedalsPro.png",
    price: 45590,
    stock: 15,
    category: "pedals",
  },
  {
    id: "0002",
    title: "Shifter",
    drop: "Many racecars use a stick-activated sequential gearbox.",
    desc: "We presents a durable and compact sequential shifter solution which emulates the feel of a real sequential shifter and can be set-up in many different configurations.",
    img: "../assets/shifter.png",
    price: 15680,
    stock: 20,
    category: "shifters",
  },
  {
    id: "0003",
    title: "Handbrake Race",
    drop:"New level of simracing expierence.",
    desc: "The Sim Handbrake is a pressure sensitive handbrake using load cell technology. It features a firm, progressive feel and is ideal for rally and drifting simulation software.",
    img: "../assets/handbrakeRace.png",
    price: 19980,
    stock: 10,
    category: "handbrakes",
  },
  {
    id: "0004",
    title: "Handbrake Pro",
    drop: "When rallying or drifting, you want full control.",
    desc: "The new Sim Handbrake is a highly adjustable, pressure sensitive USB handbrake using load cell technology.",
    img: "../assets/handbrakePro.png",
    price: 25980,
    stock: 10,
    category: "handbrakes",
  },
  {
    id: "0005",
    title: "Pedals Race",
    drop: "Every tenth of a second counts!",
    desc: " If you’re looking for pedals that help you to be both quick and consistent, look no further. Years of experience and all new testing methods have been used during the development of this innovative top-of-the line simulator product.",
    img: "../assets/pedalsRace.png",
    price: 35590,
    stock: 15,
    category: "pedals",
  },
];

const GetFetchList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

export default GetFetchList;
