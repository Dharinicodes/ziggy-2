import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>
        Oops!! Looks like there's nothing here because Swiggy changes their live
        API every now & then and I've not yet changed it in my code. But, you
        can still look at my code in github for this web app, now that you're
        already here.
      </h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
