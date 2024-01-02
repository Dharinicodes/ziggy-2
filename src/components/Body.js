import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRes, setFilteredRes] = useState([]);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1> You are offline. Please, check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            className="search-filter"
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info.avgRating > 4
              );
              setFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <label className="user-name">User Name: </label>
          <input
            className="user-name"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <Link
            className="res-links"
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.info.avgRating > 4.5 ? (
              <RestaurantCardPromoted resData={restaurant?.info} /> // restaurant?.info.promoted is currently not there in their API. if there's promoted in API, use the old method
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
