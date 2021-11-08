const products = [
    { id: "0001", title: "Pedals", img: "../assets/pedals.png", price: 35590, stock: 15, category: "pedals"},
    { id: "0002", title: "Shifter", img: "../assets/shifter.png", price: 15680, stock: 20, category: "shifters"},
    { id: "0003", title: "Handbrake", img: "../assets/handbrake.png", price: 21980, stock: 10, category: "handbrakes"}
];

const GetFetchList = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(products)
    }, 2000)
});

export default GetFetchList