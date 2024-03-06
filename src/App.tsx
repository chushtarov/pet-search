import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Give from "./components/Give/Give";
import Help from "./components/Help/Help";
import Ads from "./components/Ads/Ads";
import NewAds from "./components/NewAds/NewAds";
import Form from "./components/Form/Form";
import Serch from "./components/Serch/Serch";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <About />
              <Form />
            </>
          }
        />
        <Route path="/ads" element={<Ads />} />
        <Route path="/give" element={<Give />} />
        <Route path="/help" element={<Help />} />
        <Route path="/new" element={<NewAds />} />
        <Route path="/serch" element={<Serch />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Home />
              <Form />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
