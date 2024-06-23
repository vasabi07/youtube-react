import { Provider } from "react-redux";
import "./App.css";
import Maincontainer from "./components/Maincontainer";
import store from "./utils/store";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import Videocontainer from "./components/Videocontainer";
import Watch from "./components/Watch";
import SearchVideos from "./components/searchVideos";


// Create your browser router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <Maincontainer />,
    children: [
      {
        path: "/",
        element: <Videocontainer />,
      },
      {
        path: "/search-videos",
        element: <SearchVideos />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  );
}

export default App;
