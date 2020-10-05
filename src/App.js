import React from 'react';
import Nav from './components/Nav/Nav'
import LinksView from './views/LinksView/LinksView';
import NotesView from './views/NotesView/NotesView';
import AddView from './views/AddView/AddView';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

const App = () =>  (
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/links"/>}/>
        <Route path="/links" component={LinksView} />
        <Route path="/notes">
          <NotesView />
        </Route>
        <Route path="/add" component={AddView} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App;
