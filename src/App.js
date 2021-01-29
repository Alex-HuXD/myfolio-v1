import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeroSection from "./pages/HeroSection/HeroSection.jsx";




const App = () => (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
      <HeroSection />
    </Router> 
)

export default App;
