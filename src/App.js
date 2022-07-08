import Contact from './pages/ContactPage';
import About from './pages/AboutUsPage';
import Home from './pages/HomePage';
import Novedades from './pages/NovedadesPage';
import Portfolio from './pages/PortfolioPage';
import Services from './pages/ServicesPage';
import NavigationBar from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
return (
<div className="App">
<Router>
  
<NavigationBar></NavigationBar>

<Routes>
  <Route exact path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/novedades" element={<Novedades/>}></Route>
  <Route path="/portfolio" element={<Portfolio/>}></Route>
  <Route path="/services" element={<Services/>}></Route>
</Routes>

<Footer></Footer>

</Router>
</div>
);
}
export default App;
