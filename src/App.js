import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hobbies from "./pages/Hobbies";
import Work from "./pages/Work";
import Navigation from "./components/Navigation";
import './App.css';

function App() {
    

    return (
        <Router>
            <div className="App">
                <Navigation />

                <div className="container"></div>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/hobbies">
                    <Hobbies />
                </Route>
                <Route exact path="/work">
                    <Work />
                </Route>
            </div>
        </Router>
    );
}

export default App;
