// COMPONENTE HTML DE MENU DE NAVEGACAO
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <nav>
          <a href="../index.html">WORK</a>
          <img src="../img/gif2.gif"  >
          <a href="../about.html">ABOUT</a>
      </nav>
 </header>
          `
  }
}
// COMPONENTE HTML DE FOOTER
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <a target="blank" href="https://vimeo.com/brunodelacerda"><i class="fab fa-vimeo-square"></i></a>
      
        <a target="blank" href="https://www.linkedin.com/in/bruno-delacerda-b55033175/"><i class="fab fa-linkedin"></i></a>
         </footer> `
  }
}

customElements.define('nav-header', Header);
customElements.define('a-footer', Footer);