class TombolSaya extends HTMLElement {
  constructor() {
    super()
    let shadowRoot = this.attachShadow({mode: 'open'})
  }
  connectedCallback() {
    this.render()
  }
  render() {
    this.shadowRoot.innerHTML = `
    <style>
      button {
        padding: 5px;
        background: cornflowerblue;
        color: white;
      }
    </style>
    <button>Ini tombol saya</button>
    `
  }
}

customElements.define('tombol-saya', TombolSaya)