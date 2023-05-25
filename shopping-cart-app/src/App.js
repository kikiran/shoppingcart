import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductListPage from "./pages/ProductList";
import CartListPage from "./pages/CartList";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [inputText, setInputText] = useState("");
  const onSeachHandler = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="App">
      <Header inputSearch={inputText} onSeachHandler={onSeachHandler} />
      <Routes>
        <Route path="/" element={<ProductListPage inputText={inputText} />} />
        <Route path="/cart" element={<CartListPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
