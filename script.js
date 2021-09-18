class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
      <nav>
          <a href="work.html">WORK</a>
          <img src="img/gif2.gif"  >
          <a href="index.html">ABOUT</a>
      </nav>
 </header>
          `
    }
  }

  customElements.define('main-header', Header);