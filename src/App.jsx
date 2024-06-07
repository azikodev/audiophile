//loeaders
import { loader as HomeLoader } from "./pages/Home";
import { loader as TrashLoader } from "./pages/Trash";
import { loader as HeadPhonesLoader } from "./pages/Headphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as detailsPage } from "./pages/DeatilsPage";

//react router dom
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

//useeffect
import { useEffect } from 'react';


//pages
import {
  HomeLayout,
  Headphones,
  Speakers,
  Earphones,
  Checkout,
  Home,
  Trash,
  Error,
  DeatilsPage,
} from "./pages";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/headphones",
          element: <Headphones />,
          loader: HeadPhonesLoader,
        },
        {
          path: "/products/:slug",
          element: <DeatilsPage />,
          loader: detailsPage,
        },
        {
          path: "/speakers",
          element: <Speakers />,
          loader: SpeakersLoader,
        },
        {
          path: "/earphones",
          element: <Earphones />,
          loader: EarphonesLoader,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/trash",
          element: <Trash />,
          loader: TrashLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
