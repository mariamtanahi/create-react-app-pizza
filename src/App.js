import { BrowserRouter as  Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { productData, productDataTwo } from "./components/products/data";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData}/>
      <Feature />
      <Products heading="Sweet Treats For You" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
