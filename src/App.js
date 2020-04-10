import React from 'react';
import { Provider } from 'react-redux'

// import { Router } from 'react-router'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { Switch, Route} from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store/createStore';


import Signup from './components/Signup';

function App() {

    return (        
        <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
            <Router>
                <Switch>
                    <Route exact path="/"  component={Signup} />
                </Switch>
            </Router>
        </PersistGate>
      </Provider>
    )
}
    
export default App
    
    