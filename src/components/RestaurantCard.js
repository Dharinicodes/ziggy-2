import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(resData);

  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = resData;

  return (
    <div className="res-card" data-testid="resCard">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{costForTwo}</h4>
      <h4>{resData?.sla?.deliveryTime} minutes</h4>
      <h4>{avgRating} ⭐</h4>
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
