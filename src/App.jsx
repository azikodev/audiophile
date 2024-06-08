//loeaders
import { loader as HomeLoader } from "./pages/Home";
import { loader as TrashLoader } from "./pages/Trash";
import { loader as HeadPhonesLoader } from "./pages/Headphones";
import { loader as SpeakersLoader } from "./pages/Speakers";
import { loader as EarphonesLoader } from "./pages/Earphones";
import { loader as detailsPage } from "./pages/DeatilsPage";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

//react router dom
import {
  createBrowserRouter,
  Navigate,
  Router,
  RouterProvider,
} from "react-router-dom";

//useeffect
import { useEffect } from "react";

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
  Login,
  Signup,
} from "./pages";

function App() {
  const user = true;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <HomeLayout />
        </ProtectedRoutes>
      ),
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
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
