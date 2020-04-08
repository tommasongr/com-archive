import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                {props.headComponents}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                                <!-- Matomo -->
                                <script type="text/javascript">
                                    var _paq = window._paq || [];
                                    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                                    _paq.push(['trackPageView']);
                                    _paq.push(['enableLinkTracking']);
                                    (function() {
                                        var u="//analytics.tommasonegri.com/";
                                        _paq.push(['setTrackerUrl', u+'matomo.php']);
                                        _paq.push(['setSiteId', '2']);
                                        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                                        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                                    })();
                                </script>
                                <!-- End Matomo Code -->
                `,
                    }}
                />
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
