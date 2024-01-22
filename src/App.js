import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { GlobalStyle } from "./GlobalStyles";
import Error from "./Components/Error";

import ChangingBg from "./Pages/ChangingBg";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/box/:number" element={<ChangingBg />} />
      </Routes>
    </Router>
  );
};

export default App;
