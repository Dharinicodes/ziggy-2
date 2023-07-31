import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>Rs.{costForTwo / 100} for two</h4> // FIXME: Cost is not displaying
      properly on the UI.
      <h4>{deliveryTime} minutes </h4> // FIXME: Time is not displaying properly
      on the UI.
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
