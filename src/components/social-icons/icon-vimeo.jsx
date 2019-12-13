import React from 'react'
import styled from 'styled-components'

const IconVimeoStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconVimeo = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconVimeoStyle>
            <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-vimeo</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-vimeo"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <path
                        d="M34.9850951,12.3913819 C34.8422407,15.5056074 32.6708542,19.7698105 28.4566501,25.1839914 C24.1067343,30.8410248 20.428234,33.6695414 17.4140067,33.6695414 C15.5497571,33.6695414 13.9712162,31.9481462 12.6783841,28.5053557 C10.164147,19.2769629 9.0927392,13.8699247 7.01420801,13.8699247 C6.77135556,13.8699247 5.93565746,14.3770578 4.49997096,15.3770384 L3,13.4342189 C6.68564294,10.1985672 10.2070033,6.59863692 12.4141035,6.39864079 C14.9069124,6.15578835 16.4354542,7.86289816 17.0140144,11.5056848 C19.0639747,24.4697195 19.9711,26.4268245 23.6995993,20.5555096 C25.0352877,18.4412648 25.7567023,16.8341531 25.8567004,15.7270316 C26.1995509,12.4485237 23.299607,12.669948 21.3353593,13.5127888 C22.9067575,8.36288848 25.9138421,5.86293688 30.3494706,6.00579125 C33.6208358,6.09150388 35.1708058,8.22717682 34.9850951,12.3913819 L34.9850951,12.3913819 Z"
                        id="Path"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconVimeoStyle>
    </a>
)

export default IconVimeo
