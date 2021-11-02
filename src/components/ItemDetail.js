import "../styles/cards.css";

const ItemDetail = ({ detail }) => {
    return (
        <div className="" >
            <img className="" src={detail.img} alt={detail.title}/>
            <div>
                <h5 className="">{detail.title}</h5>
                <p className="">{detail.desc}</p>
                <p className="">$ {detail.price}</p>
            </div>
        </div>
)
};

export default ItemDetail;
