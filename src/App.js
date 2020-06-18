import React from 'react';
import './App.css';
import Header from './Header'
import BlogList from './BlogList'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
