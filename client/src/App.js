import React, { Component } from 'react';
import './App.css';

import Head from './components/head';
import ItemModal from './components/itemModal';
import ShoppingList from './components/shoppingList';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>

          <Head />
          <Container style={{ marginTop: "4em" }}>
            <ItemModal />
            <ShoppingList />
          </Container>

        </div>
      </Provider>
    );
  }
}

export default App;

