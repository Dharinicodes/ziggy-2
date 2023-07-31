import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="accordion-body" key={item.card.info.id}>
          <div className="dish-container">
            <div>
              <span>{item.card.info.name} </span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
            </div>
            <p className="dish-description">{item.card.info.description}</p>
          </div>
          <div>
            <img src={CDN_URL + item.card.info.imageId} className="dish-pic" />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
