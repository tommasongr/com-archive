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

const SocialIconStyle = styled.div`
    grid-column: 2/7;
    grid-row: 2/3;
    display: flex;
    margin-top: 1.9444444444444444rem;

    a {
        margin-right: 0.8333333333333334rem;

        :last-of-type {
            margin-right: 0;
        }
    }

    svg {
        width: 1.6666666666666667rem;
        height: 1.6666666666666667rem;
    }

    @media screen and (max-width: 900px) {
        grid-column: 1/7;
    }

    @media screen and (max-width: 620px) {
        grid-row: inherit;
    }
`

const SocialIcon = ({ designerSocial }) => (
    <SocialIconStyle>
        {designerSocial.linkedin && (
            <IconLinkedin socialLink={designerSocial.linkedin} />
        )}
        {designerSocial.instagram && (
            <IconInstagram socialLink={designerSocial.instagram} />
        )}
        {designerSocial.twitter && (
            <IconTwitter socialLink={designerSocial.twitter} />
        )}
        {designerSocial.behance && (
            <IconBehance socialLink={designerSocial.behance} />
        )}
        {designerSocial.dribbble && (
            <IconDribbble socialLink={designerSocial.dribbble} />
        )}
        {designerSocial.github && (
            <IconGithub socialLink={designerSocial.github} />
        )}
        {designerSocial.youtube && (
            <IconYoutube socialLink={designerSocial.youtube} />
        )}
        {designerSocial.vimeo && (
            <IconVimeo socialLink={designerSocial.vimeo} />
        )}
        {designerSocial.medium && (
            <IconMedium socialLink={designerSocial.medium} />
        )}
        {designerSocial.podcast && (
            <IconPodcast socialLink={designerSocial.podcast} />
        )}
    </SocialIconStyle>
)

export default SocialIcon
