import { Nav, List, Item, Link } from './NavDesktopStyles';
import { planets } from '../data';

const NavDesktop = ({ pathName, activePlanet, onHover }) => {
    return (
        <Nav>
            <List>
                {planets.map((planet) => (
                    <Item key={planet.id}>
                        <Link
                            to={planet.path}
                            $bgcolor={planet.color}
                            $isActive={
                                planet.path === pathName ||
                                planet.path === activePlanet
                            }
                            onMouseOver={() => onHover(planet.path)}
                            onMouseLeave={() => onHover(false)}
                            onFocus={() => onHover(planet.path)}
                            onBlur={() => onHover(false)}
                        >
                            {planet.name}
                        </Link>
                    </Item>
                ))}
                {/* Static Links for Login and Signup */}
                <Item>
                    <Link
                        to="/login"
                        $bgcolor="#ffffff"
                        $isActive={pathName === '/login'}
                        onMouseOver={() => onHover('/login')}
                        onMouseLeave={() => onHover(false)}
                        onFocus={() => onHover('/login')}
                        onBlur={() => onHover(false)}
                    >
                        Login
                    </Link>
                </Item>
                <Item>
                    <Link
                        to="/signup"
                        $bgcolor="#ffffff"
                        $isActive={pathName === '/signup'}
                        onMouseOver={() => onHover('/signup')}
                        onMouseLeave={() => onHover(false)}
                        onFocus={() => onHover('/signup')}
                        onBlur={() => onHover(false)}
                    >
                        Sign Up
                    </Link>
                </Item>
                <Item>
                    <Link
                        to="/chat"
                        $bgcolor="#007bff"
                        $isActive={pathName === '/chat'}
                        onMouseOver={() => onHover('/chat')}
                        onMouseLeave={() => onHover(false)}
                        onFocus={() => onHover('/chat')}
                        onBlur={() => onHover(false)}
                    >
                        Chat
                    </Link>
                </Item>
            </List>
        </Nav>
    );
};

export default NavDesktop;
