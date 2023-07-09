import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root.js";
import HomePage from "./pages/homepage/HomePage.js";

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
