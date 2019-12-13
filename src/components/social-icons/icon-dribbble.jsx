import React from 'react'
import styled from 'styled-components'

const IconDribbbleStyle = styled.div`
    cursor: pointer;

    :hover {
        svg g {
            fill: var(--accent-color);
        }
    }
`

const IconDribbble = ({ socialLink }) => (
    <a href={socialLink} target="blank">
        <IconDribbbleStyle>
            <svg
                width="38px"
                height="38px"
                viewBox="0 0 38 38"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>icon-dribbble</title>
                <desc>Created with Sketch.</desc>
                <g
                    id="icon-dribbble"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                >
                    <path
                        d="M19,5 C10.7289516,5 4,11.7289516 4,20 C4,28.2710484 10.7289516,35 19,35 C27.2710484,35 34,28.2710484 34,20 C34,11.7289516 27.2710484,5 19,5 Z M28.9175403,11.9172984 C30.701996,14.0975 31.7826008,16.874375 31.8107863,19.8984476 C31.3883669,19.8091129 27.1524395,18.9499395 22.8892944,19.4860685 C22.5413911,18.6368145 22.2130242,17.8897177 21.7632661,16.9690927 C26.5004234,15.035 28.6474194,12.2826815 28.9175403,11.9172984 L28.9175403,11.9172984 Z M27.4932056,10.4356855 C27.2627621,10.7639315 25.3341129,13.3562097 20.7782258,15.0638508 C18.6787097,11.2064315 16.3517137,8.03756048 15.9975806,7.56336694 C20.0606452,6.58395161 24.3422984,7.64018145 27.4932056,10.4356855 L27.4932056,10.4356855 Z M13.5528831,8.42459677 C13.8906855,8.88784274 16.1801815,12.0606452 18.3031048,15.8344153 C12.3099395,17.4259274 7.03133065,17.403004 6.45830645,17.3954435 C7.2891129,13.4196573 9.96842742,10.1153024 13.5528831,8.42459677 Z M6.18770161,20.0195363 C6.18770161,19.8885282 6.19030242,19.758125 6.19423387,19.6280242 C6.75479839,19.6395161 12.9635887,19.7195363 19.3619355,17.8046774 C19.7287097,18.5225 20.0790927,19.2511492 20.4006855,19.9790121 C15.7676815,21.2839516 11.5583065,25.0310484 9.48147177,28.5862298 C7.43512097,26.3148185 6.18770161,23.3102823 6.18770161,20.0195363 Z M11.1357056,30.1271774 C12.4740323,27.3913105 16.1061492,23.8597177 21.2715323,22.0975806 C23.0703226,26.7719556 23.8142137,30.689496 24.0047379,31.8135887 C19.8850605,33.5684073 14.93125,33.0869556 11.1357056,30.1271774 L11.1357056,30.1271774 Z M26.1586895,30.640625 C26.027379,29.8612298 25.3454234,26.1105645 23.6696573,21.5055645 C27.6845766,20.8628629 31.211996,21.9149194 31.6503226,22.053246 C31.0792339,25.6182258 29.033004,28.6970363 26.1586895,30.640625 Z"
                        id="Shape"
                        stroke="#EE0202"
                        fillRule="nonzero"
                    ></path>
                </g>
            </svg>
        </IconDribbbleStyle>
    </a>
)

export default IconDribbble
