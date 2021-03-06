import React from 'react'
import styled from 'styled-components'

const IconFacebookStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconFacebook = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconFacebookStyle>
            <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-facebook</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-facebook"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <path
                        d="M34,20 C34,11.7137097 27.2862903,5 19,5 C10.7137097,5 4,11.7137097 4,20 C4,27.4866935 9.48528226,33.6923387 16.65625,34.8185484 L16.65625,24.3360887 L12.8457661,24.3360887 L12.8457661,20 L16.65625,20 L16.65625,16.6951613 C16.65625,12.9360887 18.8941532,10.8596774 22.3217742,10.8596774 C23.9633065,10.8596774 25.6798387,11.1524194 25.6798387,11.1524194 L25.6798387,14.8419355 L23.7879032,14.8419355 C21.925,14.8419355 21.34375,15.9983871 21.34375,17.1844758 L21.34375,20 L25.5038306,20 L24.8385081,24.3360887 L21.34375,24.3360887 L21.34375,34.8185484 C28.5147177,33.6923387 34,27.4866935 34,20 Z"
                        id="Path"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconFacebookStyle>
    </a>
)

export default IconFacebook
