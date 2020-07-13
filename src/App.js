import React from 'react';
import logo from './logo.svg';
import Footer from './components/Footer';
import Routes from './routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: ''
});

const App = () => {
  return (
    <>
      <main>
        <Routes />
      </main>      
      <Footer />
    </>
  );
}

export default App;