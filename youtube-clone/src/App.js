import React from "react";
import './App.css';
import Header from './Header';

function App() {
  return (

    //nomeando a classe por convenção
    <div className="app">
      <h1>Olá! este é o projeto do Youtube Clone!!</h1>

      <Header />

      {/*header -> <Header />*/}
      {/*sidebar -> <Sidebar />*/}
      {/*VideosRecomendaçõe*/}
    </div>
  );
}

export default App;
