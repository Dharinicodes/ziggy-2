import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="accordion">
      {/* Accordion Header */}
      <div className="accordion-header" onClick={handleClick}>
        <span className="accordion-title">
          {data.title} ({data.itemCards.length}){" "}
        </span>

        <span> ▼ </span>
      </div>
      <div>
        {/* Accordion Body */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
