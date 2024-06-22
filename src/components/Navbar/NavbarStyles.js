import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OrbitronFont from '../../assets/Orbitron/static/Orbitron-Bold.ttf'; // Adjust the path as per your project structure

// Define @font-face rule for Orbitron font
const OrbitronFontFace = css`
    @font-face {
        font-family: 'Orbitron';
        src: local('Orbitron'), url(${OrbitronFont}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
`;

export const Header = styled(motion.header)`
    padding: 16px 24px;
    border-bottom: 1px solid ${(props) => props.theme.colors.grayDark};

    @media (min-width: 768px) {
        padding: 32px 24px 27px 24px;
    }

    @media (min-width: 1025px) {
        padding: 0 44px 0 32px;
        height: 85px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        flex-flow: column;
    }

    @media (min-width: 1025px) {
        flex-flow: row;
        height: 100%;
        max-width: 100%;
        margin: 0 auto;
    }
`;

export const Logo = styled.h1`
    all: unset;
`;

export const LogoLink = styled(Link)`
    font-size: 28px;
    font-family: 'Orbitron', sans-serif; /* Apply Orbitron font */
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: -1.05px;

    &:focus {
        outline: none;
    }

    &:focus-visible {
        outline: 2px dashed ${(props) => props.theme.colors.redLight};
        outline-offset: 3px;
    }
`;
