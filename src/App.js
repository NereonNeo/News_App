import React from 'react';
import './App.css';
import RenderList from './RenderList';

function App() {
  console.log('%c Hey Guys What are you doing','color:orange; background:black; padding: 15px')
  return (
    <div className="App">
      <h1>News</h1>
      <RenderList/>
    </div>
  );
}

export default App;
