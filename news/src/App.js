import React, { Component } from 'react';
import Header from './components/Header';
import Noticias from './components/Noticias';
import Formulario from './components/Formulario';

class App extends Component {

  state = {
    noticias : []
  }

  componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = (categoria = 'general') => {

    console.log(categoria);
    
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=03d0026a48674a5c95f0a2c263e2db00`

    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(noticias => {
        this.setState({
          noticias : noticias.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header
          titulo = 'News'
        />
        <div className="container white contenedor-noticias">
            <Formulario
              consultarNoticias = {this.consultarNoticias}
            />
            <Noticias
              noticias = {this.state.noticias}
            />
        </div>
      </div>
    );
  }
}

export default App;
