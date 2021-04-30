import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './Sass/App.scss'
import HomePage from './pages/home/home_page'
import AboutPage from './pages/about/about_page'
import ContactPage from './pages/contact/contact_page'
import PricingPage from './pages/pricing/pricing_page'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contact" >
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/pricing" >
            <PricingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
