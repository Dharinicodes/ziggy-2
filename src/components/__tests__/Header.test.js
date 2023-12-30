import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should load Header component with a login button", () => {
  render(
    // BrowserRouter - its from react-router-dom - <Link> is used in our header component
    // Provider - for store - its from redux - useSelector in our Header component - testing library cant't understand because its from a different library
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});
