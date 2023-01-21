import "./App.css";

import GeneralRoutes from "./AllRoutes/GeneralRoutes";
import Payment from "./Pages/Payment/Payment";
import Mycart from "./Pages/Mycart/Mycart";
import Product from "./Pages/product/Product";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <GeneralRoutes />
    </div>
  );
}

export default App;
