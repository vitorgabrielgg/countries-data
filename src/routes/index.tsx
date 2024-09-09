import { CountryPage, Home } from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
