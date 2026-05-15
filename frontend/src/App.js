import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DeleteAccount from "./pages/DeleteAccount";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/delete-account" element={<DeleteAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
