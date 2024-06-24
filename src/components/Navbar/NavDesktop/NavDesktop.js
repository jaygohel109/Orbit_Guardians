import { Nav, List, Item, Link, LogoutButton } from './NavDesktopStyles';
import { planets } from '../data';

const NavDesktop = ({ pathName, activePlanet, onHover, onLogout }) => {
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
                <Item>
                    <LogoutButton onClick={onLogout}>Logout</LogoutButton>
                </Item>
            </List>
        </Nav>
    );
};

export default NavDesktop;
