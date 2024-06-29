import React, { useState } from 'react';
import { Nav, List, Item, Link, UserIcon, DropdownMenu, DropdownItem, PopupBox } from './NavDesktopStyles';
import { planets } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { supabase } from '../../../supabaseClient';
import { styled } from '@mui/system';

const CustomDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        background: 'rgba(240, 240, 240, 0.185)',
        borderRadius: '15px',
        padding: '20px',
        backdropFilter: 'blur(10px)',
    },
});

const CustomDialogTitle = styled(DialogTitle)({
    fontFamily: 'Orbitron, sans-serif',
    textAlign: 'center',
    fontSize: '24px',
    color: 'white',
});

const CustomDialogContent = styled(DialogContent)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: '',
    color: '#333',
    fontFamily: 'Orbitron, sans-serif',
    fontSize: '16px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '10px',
});

const CustomDialogActions = styled(DialogActions)({
    justifyContent: 'center',
    padding: '10px',
});

const CustomButton = styled(Button)({
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '10px',
});

const NavDesktop = ({ pathName, activePlanet, onHover, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [popup, setPopup] = useState({ visible: false, x: 0, y: 0, text: '' });
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    const handleUserIconClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleProfileClick = async () => {
        setIsDropdownOpen(false);
        console.log('Profile button clicked'); // Debugging log

        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError) {
            console.error('Error getting user:', userError.message);
            return;
        }

        console.log('User:', user); // Debugging log to check the user object

        if (user) {
            try {
                const { data, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', user.id)
                    .single();

                if (error) {
                    console.error('Error fetching user profile:', error.message);
                } else {
                    console.log('User profile data:', data); // Debugging log to check the fetched data
                    setUserProfile(data);
                    setIsDialogOpen(true);
                }
            } catch (error) {
                console.error('Unexpected error:', error.message);
            }
        } else {
            console.log('No user is currently signed in.');
        }
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
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
        <>
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
                                    <DropdownItem onClick={handleProfileClick}>Profile</DropdownItem>
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
            <CustomDialog open={isDialogOpen} onClose={handleDialogClose}>
                <CustomDialogTitle>Profile Information</CustomDialogTitle>
                <CustomDialogContent>
                    <p><strong>Username:</strong> {userProfile.username}</p>
                    <p><strong>Email:</strong> {userProfile.email}</p>
                    {/* Add other profile fields as needed */}
                </CustomDialogContent>
                <CustomDialogActions>
                    <CustomButton onClick={handleDialogClose}>Close</CustomButton>
                </CustomDialogActions>
            </CustomDialog>
        </>
    );
};

export default NavDesktop;
