import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './views/Home';
import Compose from './views/Compose';
import DecksPage from './views/Decks';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/compose">
            <Compose />
          </Route>
          <Route exact path="/decks/:id">
            <DecksPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;