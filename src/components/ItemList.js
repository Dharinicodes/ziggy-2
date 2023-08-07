import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

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
          <div className="dish-container">
            <img
              className="dish-pic"
              alt=""
              src={CDN_URL + item.card.info.imageId}
            />
            <div>
              {" "}
              <button className="add-btn" onClick={() => handleAddItem(item)}>
                {" "}
                Add +{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
