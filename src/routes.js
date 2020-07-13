import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Records from "./pages/Records";

const routes = [
    { path: ["/", "/home"], component: Home },
    { path: "/guide", component: Guide },
    { path: "/records", component: Records}
];

const Routes = () => {
    return(
        <Switch>
            {routes.map((route, i) => (
                <Route exact key={i} {...route} />
            ))}
        </Switch>
    );
}

export default Routes;