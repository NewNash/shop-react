import React from 'react';
import {BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import routes from './router'

// import Home from './views/home'
// import About from "./views/about";
// import About1 from "./views/about1";
// import Notfound from "./views/notfound";
// import Category from "./views/category";

function App() {
    return (

        <div className="App">
            <Router >

                <Switch>
                    {
                        routes.map((route, index) => {
                            if (route.exact) {
                                return <Route exact key={index} path={route.path}
                                              render={
                                                  props => (
                                                      <route.component {...props} routes={route.routes}/>
                                                  )
                                              }
                                />
                            } else {
                                return <Route key={index} path={route.path}
                                              render={
                                                  props => (
                                                      <route.component {...props} routes={route.routes}/>
                                                  )
                                              }
                                />
                            }
                        })
                    }
                </Switch>
            </Router>
        </div>
    );
}

export default App;
