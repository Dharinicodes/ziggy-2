import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="accordion">
      {/* Accordion Header */}
      <div className="accordion-header">
        <span>
          {data.title} ({data.itemCards.length}){" "}
        </span>

        <span> ▼ </span>
      </div>
      <div>
        {/* Accordion Body */}

        {<ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
