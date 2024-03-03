import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import "./sass/App.scss";
import HomePage from "./pages/home/home_page";
import AboutPage from "./pages/about/about_page";
import ContactPage from "./pages/contact/contact_page";
import PricingPage from "./pages/pricing/pricing_page";
import Footer from "./Components/Footer";
import Navigation from "./Components/navigation/Navigation";

//Function to scroll to top of page when navigating
//to a new page. at the end of a page focus of page will
//be at the bottom of the page
const ScrollToTop = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <div className="App">
            <Router>
                <header className="header">
                    <Navigation />
                </header>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/pricing">
                        <PricingPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
