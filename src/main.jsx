import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import ReactPixel from "react-facebook-pixel";
import "./style.css";
import AppRoutes from "./AppRoutes.jsx";

// إعداد Facebook Pixel
const pixelId = '1285391163160161'; // ضع هنا رقم الـ Pixel ID الخاص بك
ReactPixel.init(pixelId); // تهيئة Facebook Pixel
ReactPixel.pageView(); // تتبع أول زيارة للصفحة

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
