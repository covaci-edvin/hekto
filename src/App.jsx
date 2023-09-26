import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout/RootLayout";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import Wishlist from "./pages/Wishlist/Wishlist";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="shop" element={<Shop />} />
    <Route path="login" element={<Login />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="cart" element={<Cart />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
