import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import AboutUS from "./Components/AboutUS";
import RestaurantsMenu from "./Components/RestaurantsMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
// import UserContext from "./Utils/UserContext";

const AppLayout = () => {
  const [UserName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Dilip Sarvaiya",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/* <UserContext.Provider value={{ userLogIn: UserName }}> */}
      <div>
        <Header />
        <Outlet />
      </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <AboutUS />,
      },
      {
        path: "/Restaurants/:ID",
        element: <RestaurantsMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
