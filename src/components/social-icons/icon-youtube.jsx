import React from 'react'
import styled from 'styled-components'

const IconYoutubeStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconYoutube = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconYoutubeStyle>
            <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-youtube</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-youtube"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <path
                        d="M35.289537,11.7405142 C34.8985084,10.268165 33.7464029,9.10858873 32.2835788,8.71506993 C29.6321049,8 19,8 19,8 C19,8 8.36795731,8 5.71642124,8.71506993 C4.2535971,9.10865099 3.10149158,10.268165 2.710463,11.7405142 C2,14.4092329 2,19.9772657 2,19.9772657 C2,19.9772657 2,25.5452984 2.710463,28.2140171 C3.10149158,29.6863663 4.2535971,30.7976321 5.71642124,31.1911509 C8.36795731,31.9062208 19,31.9062208 19,31.9062208 C19,31.9062208 29.6320427,31.9062208 32.2835788,31.1911509 C33.7464029,30.7976321 34.8985084,29.6863663 35.289537,28.2140171 C36,25.5452984 36,19.9772657 36,19.9772657 C36,19.9772657 36,14.4092329 35.289537,11.7405142 Z M15.5227032,25.032622 L15.5227032,14.9219093 L24.4090315,19.9773902 L15.5227032,25.032622 Z"
                        id="Shape"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconYoutubeStyle>
    </a>
)

export default IconYoutube
