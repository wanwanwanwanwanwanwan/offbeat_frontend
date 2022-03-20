import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PromoDetail from "./PromoDetail";
import NotFound from "./NotFound";
import './style.css';
const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/promo-detail" element={<PromoDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
