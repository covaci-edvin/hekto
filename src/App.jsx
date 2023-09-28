import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout/RootLayout";
import { CacheProvider } from "./context/cache";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product";
import Shop from "./pages/Shop/Shop";
import Wishlist from "./pages/Wishlist/Wishlist";

const routes = createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="products" element={<Shop />} />
    <Route path="login" element={<Login />} />
    <Route path="wishlist" element={<Wishlist />} />
    <Route path="cart" element={<Cart />} />
    <Route path="products/:id" element={<Product />} />
  </Route>,
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <CacheProvider>
      <RouterProvider router={router} />;
    </CacheProvider>
  );
}

export default App;
