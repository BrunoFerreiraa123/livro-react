import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: [
      {
        id: "978-85-7522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Mauricio Samy Silva"
      },
      {
        id: "978-85-7522-677-3",
        titulo: "Node Essencial",
        autor: "<auricio Samy Silva"
      },
      {
        id: "978-85-7522-512-7",
        titulo: "Material Deesign",
        autor: "Mauricio Samy Silva"
      }
    ]
  };
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody livros = {this.state.livros}/>
      </table>
    );
  }
}
export default App;
