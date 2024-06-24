import { useEffect, useState } from 'react';
import { Header, Logo, LogoLink, Container } from './NavbarStyles';
import NavMobile from './NavMobile/NavMobile';
import NavDesktop from './NavDesktop/NavDesktop';

const Navbar = ({ pathName, activePlanet, onHover, onLogout }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tabletBreakpoint = 768;

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.1, duration: 1 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <Header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <Logo>
                    <LogoLink to="/planets">Orbit Guardians</LogoLink>
                </Logo>
                {windowWidth >= tabletBreakpoint ? (
                    <NavDesktop
                        pathName={pathName}
                        onHover={onHover}
                        activePlanet={activePlanet}
                        onLogout={onLogout} // Pass onLogout to NavDesktop
                    />
                ) : (
                    <NavMobile
                        windowWidth={windowWidth}
                        onLogout={onLogout} // Pass onLogout to NavMobile
                    />
                )}
            </Container>
        </Header>
    );
};

export default Navbar;
