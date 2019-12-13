import React from 'react'
import styled from 'styled-components'

const IconLinkedinStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconLinkedin = () => (
    <IconLinkedinStyle>
        <svg
            width="38px"
            height="38px"
            viewBox="0 0 38 38"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>icon-linkedin</title>
            <desc>Created with Sketch.</desc>
            <g
                id="icon-linkedin"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <path
                    d="M10.7151786,31.9993303 L4.49553571,31.9993303 L4.49553571,11.9703124 L10.7151786,11.9703124 L10.7151786,31.9993303 Z M7.60200893,9.23816959 C5.61316964,9.23816959 4,7.59084816 4,5.60200887 C4,3.6126743 5.61267435,2 7.60200893,2 C9.59134351,2 11.2040179,3.6126743 11.2040179,5.60200887 C11.2040179,7.59084816 9.59017857,9.23816959 7.60200893,9.23816959 Z M33.9933036,31.9993303 L27.7870536,31.9993303 L27.7870536,22.2493303 C27.7870536,19.9256696 27.7401786,16.9457589 24.5533482,16.9457589 C21.3196429,16.9457589 20.8241071,19.4703124 20.8241071,22.0819196 L20.8241071,31.9993303 L14.6111607,31.9993303 L14.6111607,11.9703124 L20.5763393,11.9703124 L20.5763393,14.7024553 L20.6633929,14.7024553 C21.49375,13.1287946 23.5220982,11.4680803 26.5482143,11.4680803 C32.8428571,11.4680803 34,15.6131696 34,20.9970982 L34,31.9993303 L33.9933036,31.9993303 Z"
                    id="Shape"
                    stroke="#EE0202"
                    fillRule="nonzero"
                ></path>
            </g>
        </svg>
    </IconLinkedinStyle>
)

export default IconLinkedin
