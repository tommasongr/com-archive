import React from 'react'
import styled from 'styled-components'

const IconMediumStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconMedium = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconMediumStyle>
            <svg
                width="39px"
                height="38px"
                viewBox="0 0 39 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-medium</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-medium"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(0.000000, 0.000000)"
                >
                    <path
                        d="M6.79077941,12.1800703 C6.83047343,11.7897457 6.678313,11.3994211 6.38722349,11.1347943 L3.40355592,7.53586934 L3.40355592,7 L12.6787265,7 L19.8501137,22.7254497 L26.154848,7 L35,7 L35,7.53586934 L32.446351,9.98366756 C32.2280339,10.1490593 32.1155675,10.4269175 32.1618772,10.69816 L32.1618772,28.6927848 C32.1155675,28.9640273 32.2280339,29.2418855 32.446351,29.4072772 L34.940459,31.8550755 L34.940459,32.3909448 L22.3905313,32.3909448 L22.3905313,31.8550755 L24.9772586,29.3477362 C25.2286541,29.0963407 25.2286541,29.0169527 25.2286541,28.6332437 L25.2286541,14.0919992 L18.0374199,32.3446351 L17.0649163,32.3446351 L8.70270829,14.0919992 L8.70270829,26.3243746 C8.62993591,26.8403969 8.80194335,27.3564193 9.16580525,27.7268968 L12.5265661,31.8021501 L12.5265661,32.3380194 L3,32.3380194 L3,31.8087658 L6.3607608,27.7268968 C6.71800703,27.3564193 6.8833988,26.8337813 6.79077941,26.3243746 L6.79077941,12.1800703 Z"
                        id="Path"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconMediumStyle>
    </a>
)

export default IconMedium
