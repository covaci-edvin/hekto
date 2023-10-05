import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/layouts/Root";
import { CacheProvider } from "./context/cache";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";

const routes = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route index element={<Home />} />
    <Route path="shop">
      <Route index element={<Shop />} />
      <Route path=":id" element={<Product />} />
    </Route>
    <Route path="login" element={<Login />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="cart" element={<Cart />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <CacheProvider>
      <RouterProvider router={router} />
    </CacheProvider>
  );
}

export default App;
