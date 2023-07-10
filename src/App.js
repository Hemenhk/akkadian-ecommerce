import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/homepage/HomePage";

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
