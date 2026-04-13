import { Route, Routes } from "react-router";
import MainLayout from "./MainLayout";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import CartProvider from "./lib/CartProvider";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
