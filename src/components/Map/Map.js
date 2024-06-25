// src/components/MapComponent/MapComponent.js

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { supabase } from '../../supabaseClient';
import L from 'leaflet';
import alienIconUrl from '../../assets/alien_pointer.png'; // Path to your alien icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon if using Font Awesome icons
import { faSpinner,faSave,faTrash } from '@fortawesome/free-solid-svg-icons'; // Example: Import a spinner icon from Font Awesome
import './map.css'; // Optional: Add custom styles for the map component
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const CardWrapper = styled.div`
    background: rgba(240, 240, 240, 0.185); /* Translucent background */
    color: #fff; /* Hardcoded white color */
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    width: 95%; /* Adjust width */
    max-width: 1600px; /* Adjust max width */
    height: auto; /* Auto height */
    margin: 20px auto; /* Adjust margin */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    animation: ${fadeIn} 1s ease-in-out;
    margin-bottom: 20px; /* Adjust margin */
    overflow: hidden;
`;

// Fix leaflet's default icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const alienIcon = L.icon({
  iconUrl: alienIconUrl,
  iconSize: [48, 48], // Size of the icon
  iconAnchor: [24, 48], // Point of the icon which corresponds to marker's location
  popupAnchor: [0, -48], // Point from which the popup should open relative to the iconAnchor
});

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setIsLoading(false); // Set loading to false once location is fetched
        },
        (error) => {
          console.error('Error getting user location:', error);
          setIsLoading(false); // Set loading to false on error
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setIsLoading(false); // Set loading to false if geolocation is not supported
    }

    // Fetch locations from Supabase
    const fetchLocations = async () => {
      try {
        const { data: locations, error } = await supabase.from('map').select('*');
        if (error) {
          console.error('Error fetching locations:', error.message);
          return;
        }
        setLocations(locations);
      } catch (error) {
        console.error('Error fetching locations:', error.message);
      }
    };

    fetchLocations();
  }, []);

  const handleSaveLocation = async () => {
    if (!userLocation) {
      console.error('User location not available.');
      return;
    }

    try {
      // Insert the new location
      const { data: insertResult, error: insertError } = await supabase.from('map').insert([
        { map_location: { latitude: userLocation[0], longitude: userLocation[1] } },
      ]);

      if (insertError) {
        console.error('Error saving coordinates:', insertError.message);
        return;
      }

      console.log('Coordinates saved successfully:', insertResult);
      // Update locations state to include newly saved location
      setLocations([...locations, insertResult[0]]);
    } catch (error) {
      console.error('Error saving coordinates:', error.message);
    }
  };

  const handleRemoveLocation = async (id) => {
    try {
      const { data, error } = await supabase.from('map').delete().eq('id', id);
      if (error) {
        console.error('Error removing location:', error.message);
        return;
      }
      console.log('Location removed successfully:', data);
      // Update locations state after removal
      const updatedLocations = locations.filter((loc) => loc.id !== id);
      setLocations(updatedLocations);
    } catch (error) {
      console.error('Error removing location:', error.message);
    }
  };

  return (
    <CardWrapper>
        <div className="map-component">
      {isLoading ? (
        <div className="loading-container">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" /> {/* Example: Font Awesome spinner icon */}
        </div>
      ) : (
        <MapContainer center={userLocation} zoom={13} className="map-container">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker key={location.id} position={[location.map_location.latitude, location.map_location.longitude]} icon={alienIcon}>
              <Popup>
                <p>Location ID: {location.id}</p>
                <button className="delete-button" onClick={() => handleRemoveLocation(location.id)}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </Popup>
            </Marker>
          ))}
          <Marker position={userLocation} icon={alienIcon}>
            <Popup>
              Your current location. <br /> Easily customizable. <br />
              {/* <button className="button-container" onClick={handleSaveLocation}>
                <FontAwesomeIcon icon={faSave} /> Save Location
              </button> */}
            </Popup>
          </Marker>
        </MapContainer>
      )}
      {!isLoading && (
        <div className="button-container">
          <button onClick={handleSaveLocation}>Alien Spotted</button>
        </div>
      )}
    </div>
    </CardWrapper>
  );
};

export default MapComponent;