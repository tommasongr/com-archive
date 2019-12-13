import React from 'react'
import styled from 'styled-components'

import IconLinkedin from './social-icons/icon-linkedin'
import IconInstagram from './social-icons/icon-instagram'
import IconTwitter from './social-icons/icon-twitter'
import IconBehance from './social-icons/icon-behance'
import IconDribbble from './social-icons/icon-dribbble'
import IconGithub from './social-icons/icon-github'
import IconYoutube from './social-icons/icon-youtube'
import IconVimeo from './social-icons/icon-vimeo'
import IconPodcast from './social-icons/icon-podcast'
import IconMedium from './social-icons/icon-medium'
import IconRss from './social-icons/icon-rss'

const SocialIconStyle = styled.div`
    grid-column: 2/7;
    grid-row: 2/3;
    display: flex;
    gap: 0.8333333333333334rem;
    margin-top: 1.9444444444444444rem;

    svg {
        width: 1.6666666666666667rem;
        height: 1.6666666666666667rem;
    }
`

const SocialIcon = ({ designerSocial }) => (
    <SocialIconStyle>
        {designerSocial.linkedin && <IconLinkedin />}
        {designerSocial.instagram && <IconInstagram />}
        {designerSocial.twitter && <IconTwitter />}
        {designerSocial.behance && <IconBehance />}
        {designerSocial.dribbble && <IconDribbble />}
        {designerSocial.github && <IconGithub />}
        {designerSocial.youtube && <IconYoutube />}
        {designerSocial.vimeo && <IconVimeo />}
        {designerSocial.medium && <IconMedium />}
        {designerSocial.podcast && <IconPodcast />}
        {/* {designerSocial.rss && <IconRss />} */}
    </SocialIconStyle>
)

export default SocialIcon
