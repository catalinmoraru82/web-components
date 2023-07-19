customElements.define('em-show-info-button',
    class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `
                <style>
                    #info-box {
                       display: none;
                    }
                </style>
                <button>Show</button>
                <p id="info-box"><slot></slot></p>
            `;

            this._isVisible =  false;

            this.button = this.shadowRoot.querySelector('button');
            this.infoEl = this.shadowRoot.querySelector('#info-box');

            this.button.addEventListener('click', this._toggleVisibility.bind(this))
        }

        _toggleVisibility() {
            this._isVisible = !this._isVisible;
            this.button.textContent = this._isVisible ? 'Show': 'Hide';
            this.infoEl.style.display = this._isVisible ? 'block': 'none';
        }
    }
)