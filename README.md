# Ziggy App

     - An application which uses swiggy's live API to build, while learning all the REACT core concepts with the project based learning method (learning by doing)

# Concepts Used and Learned

    - Component based building
    - Functional components with props, conditional rendering, destructuring, config driven UI, optional chaining
    - Named & Default export,Reconciliation algorithm/React Fiber
    - Shimmer UI, conditional rendering using ternary operators, how to get input from user
    - Hooks
    - React Router, Outlet and Link component in React Router
    - Class based components, lifecycle, rendering order
    - Lazy loading + suspense
    - Tailwind CSS
    - HOC and how to build accordions
    - Redux Toolkit + react-redux

# Hooks

    - useState
    - useEffect
    - useContext
    - useRouteError
    - useParams
    - useSelector
    - useDispatch
    - Custom hooks

# Redux ToolKit

1.  Install @reduxjs/toolkit and react-redux
2.  Build our store
3.  Connect our store to our app (react-redux)
4.  Slice (cart slice - here)
5.  Dispatch (action)
6.  Reducer (binds state & action)
7.  Selector (subscribing to store)

# To set up Testing in our app

1. Install React Testing Library
2. Install Jest
3. Install Babel dependancies (for jest)
4. Configure Babel
5. Configure Parcel config file to disable default Babel transpilation
6. Execute Jest package (npx jest --init)
7. Install JSDOM Library
8. Install @babel/preset-react to make JSX work in test cases
9. Include @babel/preset-react inside my babel config file
10. Install testing-library/jest-dom because when we write test cases, certain reserved words with function such as eg: toBeInTheDocument comes from the above mentioned library only, which is why we need to install it

# PS:

I wanted to use Tailwind CSS in this project but my VS CODE started to hang a lot after installing it, which is why I have two repos in my profile under the same name Ziggy. But, don't worry I have learnt Tailwind CSS and know how to use it.
