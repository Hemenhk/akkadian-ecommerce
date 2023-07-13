import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import BeardPage from "./pages/categories/beard/BeardPage";
import HairPage from "./pages/categories/hair/HairPage";
import SingleItemPage from "./pages/single-item/SingleItemPage";
import Faq from "./pages/Faq";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "shop", element: <ShopPage /> },
        { path: "beard", element: <BeardPage /> },
        { path: "hair", element: <HairPage /> },
        { path: "faq", element: <Faq /> },
        { path: "/:productId", element: <SingleItemPage /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
