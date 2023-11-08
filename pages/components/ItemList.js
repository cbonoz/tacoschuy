

const ItemList = ({ items, title }) => {

    return <div className="col-sm-12 col-md-6 col-xs-12 col-lg-4 bold">
        <h2 className="item-category">{title}:</h2>
        <ul>
            {items.map((item, i) => {
                return (
                    <li className="food-item bold" key={i}>
                        {item}
                    </li>
                );
            })}
        </ul>
    </div>
}
export default ItemList;