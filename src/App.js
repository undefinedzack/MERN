import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import AddCustomer from "./Components/AddCustomer";
import Home from "./Components/Home";

import './App.css'
import EditCustomer from "./Components/EditCustomer";
import Fragment from "./Components/fragment";

import Hero from './Day10/Hero'

function App() {
    return(
        <>
            <Hero hero={'superman'} />
            <Hero hero={'batman'} />
            <ErrorBoundary>

            </ErrorBoundary>
            <Hero hero={'joker'} />
            {/*<Router>*/}
            {/*    <Switch>*/}
            {/*        <Route path={'/'} exact component={Home} />*/}
            {/*        <Route path={'/addCustomer'} exact component={AddCustomer} />*/}
            {/*        <Route path={'/editCustomer/:id'} exact component={EditCustomer} />*/}
            {/*        <Route path={'/fragment'} exact component={Fragment} />*/}
            {/*    </Switch>*/}
            {/*</Router>*/}
        </>
    )
}

export default App;
