import React from "react";
import Navbar from "../components/navbar";
import Productcontainers from "../components/products";
import Footer from "../components/footer";

const Products = () => {
  return (
    <div className="text-light">
      <Navbar />
      <Productcontainers />
      <Footer />
    </div>
  );
};

export default Products;
