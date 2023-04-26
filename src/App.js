import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Accountspage from "./pages/accountspage";
import Addproducts from "./pages/addproducts";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/accounts" element={<Accountspage />} />
            <Route path="/addProducts" element={<Addproducts />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
