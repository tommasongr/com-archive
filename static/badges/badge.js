function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest()
    rawFile.overrideMimeType('application/json')
    rawFile.open('GET', file, true)
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}

class ComCertificate extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })

        let badge

        if (this.getAttribute('bg') === 'false') {
            switch (this.getAttribute('color')) {
                case 'red':
                    badge = 'badge-nobg-red.svg'
                    break
                case 'black':
                    badge = 'badge-nobg-black.svg'
                    break
                case 'white':
                    badge = 'badge-nobg-white.svg'
                    break

                default:
                    break
            }
        } else if (this.getAttribute('bg') === 'true') {
            switch (this.getAttribute('color')) {
                case 'red':
                    badge = 'badge-bg-red.svg'
                    break
                case 'black':
                    badge = 'badge-bg-black.svg'
                    break
                case 'white':
                    badge = 'badge-bg-white.svg'
                    break

                default:
                    break
            }
        }

        this.shadowRoot.innerHTML = `
            <style>
                div {
                    position: absolute;
                    min-height: 80px;
                    min-width: 80px;
                    height: 80px;
                    width: 80px;
                    right: 20px;
                    top: 20px;
                }
            </style>
            <a href="https://archiviocom.netlify.com" target="blank">
                <div>
                    <img src="https://archiviocom.netlify.com/badges/${badge}" />
                </div>
            </a>
        `
    }

    connectedCallback() {
        readTextFile(
            'https://archiviocom.netlify.com/badges/badge-whitelist.json',
            function(text) {
                let whitelist = JSON.parse(text)
                console.log(whitelist)
                console.log(window.location.hostname)

                if (!whitelist.whitelist.includes(window.location.hostname)) {
                    window.alert('NON SEI AUTORIZZATO A USARE QUESTO BADGE')
                    document.querySelector('com-certificate').style.display =
                        'none'
                }
            }
        )
    }
}

window.customElements.define('com-certificate', ComCertificate)
