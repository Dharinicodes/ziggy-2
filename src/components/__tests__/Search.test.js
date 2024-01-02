// // This is for Integration Testing

// import { render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "../mocks/resListData.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// //since fetch is provided by browser, it will throw error while testing which is what we are trying to resolve here
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// // Whenever using fetch( or else it will throw error while testing), you should wrap -> render -> using await -> while using await -> use async
// it("Should Search Res List for pizza text input", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         {" "}
//         <Body />{" "}
//       </BrowserRouter>
//     )
//   );

// const cardsBeforeSearch = screen.getAllByTestId("resCard");

// expect(cardsBeforeSearch.length).toBe(9)

//   const searchBtn = screen.getByRole("button", { name: "Search" });

// const searchInput = screen.getByTestId("searchInput")

// fireEvent.change(searchInput, { target: { value: "pizza"}} )

//fireEvent.click(searchBtn);

// // screen should load pizza restaurant cards (Assertion);

// const cardsAfterSearch = screen.getAllByTestId("resCard");

// expect(cardsAfterSearch.length).toBe(4);

//   expect(searchBtn).toBeInTheDocument();
// });

// it("Should filter Top rated restaurant", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         {" "}
//         <Body />{" "}
//       </BrowserRouter>
//     )
//   );

// const cardsBeforeFilter = screen.getAllByTestId("resCard");

// expect(cards.length).toBe(9)

// const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

// fireEvent.click(topRatedBtn);

// const cardsAfterFilter = screen.getAllByTestId("resCard");

// expect(cardsAfterFilter).toBe(13);
// // toBe() -> how many cards you get after filter, that number should come here. Remember, swiggy changes their api often. Do according to that

// });

// //  TODO: This test failed, should find solution for it
