import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    // BrowserRouter - its from react-router-dom - <Link> is used in our header component
    // Provider - for store - its from redux - useSelector in our Header component - testing library cant't understand because its from a different library
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const loginButton = screen.getByText("login") --------- another way to write
  const loginButton = screen.getByRole("button", { name: "Login" }); // if there are multiple buttons and I want to find out specifically login button
  expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("0"); // Cart - (0 items)
  expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/🛒/); // test case for Cart for more than 0 items; can be passed as a regex
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); // to test an event -> use fireEvent

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
