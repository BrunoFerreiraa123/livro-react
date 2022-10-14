function Header() {
    return React.createElement("header", {className: "topo"},
    React.createElement("h1", {className: "logo"}, "Editora MaujorTec"));
}

function Navegacao() {
    return React.createElement("div", {className: "navegacao"}, "Coluna de Navegação");
}

function Principal() {
    return React.createElement("div", {className: "principal"}, "Coluna Principal");
}

function Rodape() {
    return React.createElement("footer", {className: "rodape"},
    React.createElement("p", {}, "Rodapé"));
}

function Topo() {
    return React.createElement("div", {className: "c-topo"},
    Header(),
    Navegacao()
    );
};

function App() {
    return React.createElement(React.Fragment, {},
        Topo(),
        Principal(),
        Rodape()
        );
};

ReactDOM.render(App(), document.getElementById("root"));