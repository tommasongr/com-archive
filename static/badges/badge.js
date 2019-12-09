if (typeof window !== `undefined`) {
    function readTextFile(file, callback) {
        var rawFile = new XMLHttpRequest()
        rawFile.overrideMimeType('application/json')
        rawFile.open('GET', file, true)
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status === '200') {
                callback(rawFile.responseText)
            }
        }
        rawFile.send(null)
    }

    class ComBadge extends HTMLElement {
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
                com-certificate {
                    position: relative;
                }

                #com-badge-container {
                    min-height: 80px;
                    min-width: 80px;
                    position: relative;
                    height: 100%;
                }

                #com-badge-container img {
                    position: relative;
                    height: 100%;
                }
            </style>
            <a href="https://archiviocom.netlify.com" target="blank">
                <div id="com-badge-container">
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

                    if (
                        !whitelist.whitelist.includes(window.location.hostname)
                    ) {
                        window.alert('NON SEI AUTORIZZATO A USARE QUESTO BADGE')
                        document.querySelector(
                            'com-certificate'
                        ).style.display = 'none'
                    }
                }
            )
        }
    }

    window.customElements.define('com-badge', ComBadge)
}
