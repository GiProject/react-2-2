export default function ShopCard({ item}) {
    return <div className="item">
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
        <img src={item.img} alt="" />
        <div className="bottom">
            <span className="price">${item.price}</span>
            <button>add to cart</button>
        </div>
    </div>
}