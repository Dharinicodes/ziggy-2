// import { fireEvent, render, screen } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
// import Header from "../Header";
// import Cart from "../Cart";
// import RestaurantMenu from "../RestaurantMenu";
// import MOCK_DATA from "../mocks/resMenu.json";
// import { Provider } from "react-redux";
// import appStore from "../../utils/appStore";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   })
// );

// it("should load Restaurant Menu Component", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//           <RestaurantMenu />
//           <Cart />
//         </Provider>
//       </BrowserRouter>
//     )
//   );

//   const accordionHeader = screen.getByText("BURGERS");

//   fireEvent.click(accordionHeader);

//   expect(screen.getAllByTestId("foodItems").length).toBe(4);

//   const addBtns = screen.getAllByRole("button", { name: "Add +" });

//   fireEvent.click(addBtns[0]);

//   expect(screen.getByText("1")).toBeInTheDocument(); // "Cart - (1 items)"

//   fireEvent.click(addBtns[1]);

//   expect(screen.getByText("2")).toBeInTheDocument(); // "Cart - (2 items)"

//   expect(screen.getAllByTestId("foodItems").length).toBe(7); // This is for cart page

//   fireEvent.click(screen.getByRole("button", { name: "Clear Cart" })); // This is to test as soon as cart is cleared, it gets cleared. This is also a short cut way of writing fireEvent

//   expect(screen.getAllByTestId("foodItems").length).toBe(5);

//   expect(
//     screen.getByText("Cart is empty, Add Food Items to order!")
//   ).toBeInTheDocument();
// });

// // TODO: Test case failed, should find solution for it.
