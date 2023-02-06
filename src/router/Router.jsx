import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CartPage,
  HomePage,
  LoginPage,
  MyPage,
  NotFoundPage,
  OrderPage,
  ProductPage,
  SignupPage,
} from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
