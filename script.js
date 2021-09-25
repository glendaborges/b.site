class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
      <nav>
          <a href="../work.html">WORK</a>
          <img src="../img/gif2.gif"  >
          <a href="../index.html">ABOUT</a>
      </nav>
 </header>
          `
  }
}
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