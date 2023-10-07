// https://blog.lalacube.com/mei/webComponent_msc-circle-progress.html
import eventBus from '@/utils/eventBus';

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
<style>
:host {
  --font-color: var(--my-header-font-text, white);
  --bg-color  : var(--my-header-bg-color, black);
  display: block;
}
  :host([theme="light"]) {
    --font-color: var(--my-header-font-text, black);
    --bg-color  : var(--my-header-bg-color, white);
  }
  :host([data-loading="true"]) .spinner-border {
    display: inline-block;
  }
  :host([data-loading="true"]) .nav-btn__text {
    display: none;
  }

.nav {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--bg-color);
  padding: 10px 20px;
  border-radius: 5px;
}
  .nav a { color: var(--font-color); }
  .nav > * + * { margin-left: 20px; }
  .nav__sign-wrap { margin-left: auto; }
  .nav-btn {
    background-color: var(--font-color);
    color: var(--bg-color);
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 1rem;
  }
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner-border {
  display: none;
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
  border: 3px solid var(--bg-color);
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
}
</style>

<nav class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <div class="nav__sign-wrap">
    <button class="nav-btn">
      <span class="spinner-border"></span>
      <span class="nav-btn__text">Sign in</span>
    </button>
  </div>
</nav>
`;

type UserData = {
  name: string;
  email: string;
};

export default class MyHeader extends HTMLElement {
  static get observedAttributes() {
    return ['theme'];
  }

  public userData: UserData | null = null;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));

    const navBtn = shadowRoot.querySelector('.nav-btn') as HTMLButtonElement;
    const controller = new AbortController();
    const { signal } = controller;
    const signInClickHandler = () => {
      console.log('sign in click');
      this.setAttribute('data-loading', 'true');
      setTimeout(() => {
        this.userData = {
          name: 'milkmidi',
          email: 'milkmidi@gmail.com',
        };
        // @ts-ignore
        window.userData = this.userData;
        eventBus.dispatch('signInSuccess', this.userData);
        shadowRoot.querySelector('.nav-btn__text')!.textContent = 'Sign out';
        this.removeAttribute('data-loading');
        controller.abort();
      }, 2000);
    };
    navBtn.addEventListener('click', signInClickHandler, { signal });
  }
}

if (!window.customElements.get('my-header')) {
  window.customElements.define('my-header', MyHeader);
}
