import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import HomePage from './components/home';

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage/>
      </Layout>
    </div>
  );
}

export default App;
