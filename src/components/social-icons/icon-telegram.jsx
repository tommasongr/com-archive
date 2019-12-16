import React from 'react'
import styled from 'styled-components'

const IconTelegramStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconTelegram = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconTelegramStyle>
            <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-telegram</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-telegram"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <path
                        d="M34.9054436,8.44285903 L30.0769528,31.2139073 C29.7126731,32.8210233 28.762689,33.2210167 27.4127116,32.4638865 L20.0556916,27.0425484 L16.5057508,30.4567771 C16.1129003,30.8496277 15.7843343,31.1781936 15.0272041,31.1781936 L15.5557667,23.6854616 L29.1912533,11.3642388 C29.7841005,10.8356762 29.062684,10.542824 28.2698401,11.0713866 L11.4129787,21.685495 L4.15595708,19.4141044 C2.57741201,18.9212555 2.54884106,17.8355593 4.48452302,17.0784291 L32.8697633,6.14289744 C34.184027,5.65004853 35.3340078,6.43574969 34.9054436,8.44285903 Z"
                        id="Path"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconTelegramStyle>
    </a>
)

export default IconTelegram
