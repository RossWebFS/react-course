import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { PricingPage } from "./pages/PricingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AppLayout } from "./pages/AppLayout";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
