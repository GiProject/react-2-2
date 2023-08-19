export default function ShopItem({item}) {
    return <div className="item">
        <img src={item.img} alt="" />
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
        
        <div className="bottom">
            <span className="price">${item.price}</span>
            <button>add to cart</button>
        </div>
    </div>
}