import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContenidoNasa from './ContenidoNasa';

class App extends Component {
 
  state = {
    nasaObject : {}
  }
  componentDidMount() {
    this.obtenerInformacion();
  }

  obtenerInformacion = async() => {
    const apiKey = "XiWtezagJvJT968K34XBT7DNYR9oRc3yBe54CFY4";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    await axios.get(url)
      .then(respuesta => {
          this.setState({
            nasaObject : respuesta.data
          })
      })
      .catch(error => {
        console.log(error);
      })
  }
  render() {
    return (

      <div className="App">
        <Header title="Nasa React Tech"/>
        <div className="container white contenedor-nasa">
          <ContenidoNasa
              data = {this.state.nasaObject} />
        </div>
      </div>

    );
  }
}

export default App;
