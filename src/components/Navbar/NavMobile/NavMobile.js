import { Nav, Menu, List, Item, Link, Icon } from './NavMobileStyles';
import { planets } from '../data';
import useToggleMenu from '../useToggleMenu';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavMobile = ({ windowWidth, onLogout }) => {
    const [handleToggle, restoreToDefault, isOpen] = useToggleMenu();

    return (
        <Nav>
            <Menu onClick={handleToggle}>
                {isOpen ? <Icon icon={faTimes} /> : <Icon icon={faBars} />}
            </Menu>
            {isOpen && (
                <List
                    initial={{ height: 0 }}
                    animate={{ height: '100vh' }}
                    transition={{
                        ease: [0.06, 0.9, 1, 0.98],
                        duration: 0.7,
                    }}
                >
                    {planets.map((planet) => (
                        <Item
                            key={planet.id}
                            initial={{ x: `100vw` }}
                            animate={{ x: '0vw' }}
                            transition={{
                                ease: [0.06, 0.9, 1, 0.98],
                                duration: 0.7,
                                delay: `${(planet.id * 5 + 0.5) / 100}`,
                            }}
                        >
                            <Link
                                to={planet.path}
                                color={planet.color}
                                onClick={() => restoreToDefault()}
                            >
                                {planet.name}
                                <Icon
                                    name="icon-chevron1"
                                    size={20}
                                    color="hsl(240, 6%, 54%)"
                                    customStyle={{ marginTop: '5px' }}
                                />
                            </Link>
                        </Item>
                    ))}
                    <Item>
                        <Link
                            as="button"
                            color="#007bff"
                            onClick={() => {
                                restoreToDefault();
                                onLogout();
                            }}
                        >
                            Logout
                            <Icon
                                name="icon-chevron1"
                                size={20}
                                color="hsl(240, 6%, 54%)"
                                customStyle={{ marginTop: '5px' }}
                            />
                        </Link>
                    </Item>
                </List>
            )}
        </Nav>
    );
};

export default NavMobile;
