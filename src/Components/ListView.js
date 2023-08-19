import ShopItem from './ShopItem'

export default function ListView({items}) {
    return <div className="row list">
        {items.map((item) => (
            <ShopItem item = {item} />
        ))}
    </div>
}