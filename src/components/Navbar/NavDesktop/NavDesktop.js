import { useState } from 'react';
import { Nav, List, Item, Link, UserIcon, DropdownMenu, DropdownItem, LogoutButton } from './NavDesktopStyles';
import { planets } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavDesktop = ({ pathName, activePlanet, onHover, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleUserIconClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleBlur = () => {
        setIsDropdownOpen(false);
    };

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
                    <UserIcon onClick={handleUserIconClick} onBlur={handleBlur} tabIndex="0">
                        <FontAwesomeIcon icon={faUser} />
                        {isDropdownOpen && (
                            <DropdownMenu>
                                <DropdownItem>Profile</DropdownItem>
                                <DropdownItem onClick={onLogout}>Logout</DropdownItem>
                            </DropdownMenu>
                        )}
                    </UserIcon>
                </Item>
            </List>
        </Nav>
    );
};

export default NavDesktop;
