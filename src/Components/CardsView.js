import ShopCard from "./ShopCard";

export default function CardsView({ items }){
    return <div className="row cards">
        {items.map((item) => (
            <ShopCard item = {item}/>
        ))}
    </div>
}