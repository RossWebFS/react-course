import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { PricingPage } from "./pages/PricingPage/PricingPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { GeoPage } from "./pages/GeoPage/GeoPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { CityList } from "./features/CityList/CityList";
import { CountryList } from "./features/CountryList/CountryList";
import { Form } from "./features/Form/Form";
import { City } from "./components/City/City";
import { CityProvider } from "./contexts/CityContext";

const App = () => {
  return (
    <CityProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/geo" element={<GeoPage />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CityProvider>
  );
};

export default App;
