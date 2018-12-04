// USING PAPER

import React, { Component } from "react";
import List from './List'

const oferta1 = {
  cor: "branco",
  ano: "2015",
  mecanico: "Renatinho",
  marca: "Ferrari",
  seguro: "Golden Cross",
  usuario: "rodd123@gmail.com"
};

const oferta2 = {
  cor: "azul",
  ano: "2015",
  mecanico: "Renatinho",
  marca: "Mercedes",
  seguro: "sulamerica",
  usuario: "renataotoaaot3@gmail.com"
};
const oferta3 = {
  cor: "preto",
  ano: "2013",
  mecanico: "Bob",
  marca: "Palho",
  seguro: "StrawBerry",
  usuario: "ricardo21123@gmail.com"
};
const oferta4 = {
  cor: "amarelo",
  ano: "2015",
  mecanico: "Renatinho",
  marca: "Lamborguini",
  seguro: "watch",
  usuario: "keaokeoao123@gmail.com"
};

const LISTADASOFERTAS = [oferta1, oferta2, oferta3, oferta4];

class App extends Component {
  render() {
    return (
      <div>
        <List listaPregao={LISTADASOFERTAS}/>
      </div>
    );
  }
}


export default App;
