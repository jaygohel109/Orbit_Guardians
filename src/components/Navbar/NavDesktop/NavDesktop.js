import { useState } from 'react';
import { Nav, List, Item, Link, UserIcon, DropdownMenu, DropdownItem, LogoutButton, PopupBox } from './NavDesktopStyles';
import { planets } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NavDesktop = ({ pathName, activePlanet, onHover, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, text: '' });

    const handleUserIconClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleBlur = () => {
        setIsDropdownOpen(false);
    };

    const handleMouseOver = (e, text) => {
        setPopup({ visible: true, x: e.clientX, y: e.clientY, text });
    };

    const handleMouseMove = (e) => {
        setPopup((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseLeave = () => {
        setPopup({ visible: false, x: 0, y: 0, text: '' });
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
                            onMouseOver={(e) => handleMouseOver(e, planet.info)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
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
            {popup.visible && (
                <PopupBox
                    className={popup.visible ? 'visible' : ''}
                    style={{ top: popup.y + 20, left: popup.x }}
                >
                    {popup.text}
                </PopupBox>
            )}
        </Nav>
    );
};

export default NavDesktop;
