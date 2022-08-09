import React from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Contacts from './components/contacts/Contacts';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
