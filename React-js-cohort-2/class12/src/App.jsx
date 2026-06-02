import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import AllCourses from "./pages/AllCourses";
import Kodr from "./pages/Kodr";
import Kodex from "./pages/Kodex";
import Layout from "./pages/Layout";

const App = () => {
  {
    /* 2st Method to create a Routes */
  }
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "courses",
          element: <Courses />,
          children: [
            {
              index: true,
              element: <AllCourses />,
            },
            {
              path: "kodr",
              element: <Kodr />,
            },
            {
              path: "kodex",
              element: <Kodex />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      {/* <Navbar /> */}

      <RouterProvider router={allRoutes} />

      {/* <Footer /> */}
    </div>
  );
};

export default App;
