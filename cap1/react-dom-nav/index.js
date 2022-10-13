
const elAHome = React.createElement("a", {href: "https://www.google.com"}, "Home");
const elALivros = React.createElement("a", {href: "https://www.google.com"}, "Livros");
const elAAutores = React.createElement("a", {href: "https://www.google.com"}, "Autores");

const elLiHome = React.createElement("li", {href: "https://www.google.com"}, elAHome);
const elLiLivros = React.createElement("li", {href: "https://www.google.com"}, elALivros);
const elLiAutores = React.createElement("li", {href: "https://www.google.com"}, elAAutores);

const ul = React.createElement("ul", {}, elLiHome, elLiLivros, elLiAutores);

const nav = React.createElement("nav", {className: "menu"}, ul);

ReactDOM.render(nav, document.getElementById("root"))
