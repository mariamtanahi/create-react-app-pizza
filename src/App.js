import { BrowserRouter as  Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/products";
import { productData, productDataTwo } from "./components/products/data";
import { GlobalStyle } from "./GlobalStyles";
import { Element } from 'react-scroll'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Element id='pizza' name='pizza'>
      <Products heading="Choose your favorite" data={productData}/>
      </Element>
      <Feature />
      <Element id="sweet" name="sweet">
      <Products heading="Sweet Treats For You" data={productDataTwo}/>
      </Element>
      <Footer />
    </Router>
  );
}

export default App;
