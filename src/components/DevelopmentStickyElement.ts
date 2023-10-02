const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<style>
  :host {
    display: block;
    position: fixed;
    z-index: 99999;
    top:0;
    left:0;
    font-size: 12px;
    background: white;
    color: black;
    pointer-events: none;
    width: 240px;
    transform: rotate(-45deg) translate(-80px, -25px);
    text-align: center;
    transform-origin: center center;
    box-shadow: 0 0 10px black;
    font-weight: bold;
  }
</style>
<div id="text"></div>
`;
class DevelopmentStickyElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    const text = shadowRoot.querySelector('#text') as HTMLElement;
    text.textContent = `${process.env.BUILD_TIMESTAMP}`;
  }
}
window.customElements.define('development-sticky-element', DevelopmentStickyElement);
