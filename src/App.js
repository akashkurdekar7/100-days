import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { GlobalStyle } from "./GlobalStyles";
import Error from "./Components/Error";
import ChangingBg from "./Pages/ChangingBg";
import ProductSwipe from "./Pages/ProductSwipe";
import Practise from "./Components/Practise";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/practise" element={<Practise />} />
        <Route path="/box/1" element={<ChangingBg />} />
        <Route path="/box/2" element={<ProductSwipe />} />
      </Routes>
    </Router>
  );
};

export default App;
