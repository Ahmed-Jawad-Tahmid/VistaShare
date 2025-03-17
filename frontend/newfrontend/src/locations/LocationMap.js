import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for custom icons
import { getAllCities, getAllLocations } from '../shared/util/dataGetters'; 
import { Link } from 'react-router-dom';
import './LocationMap.css';

const LocationMap = () => {
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cities, setCities] = useState([]);

    // Helper function to parse coordinates from the string format "51.0412° N, 114.0690° W"
    const parseCoordinates = (coordinates) => {
        const [latStr, lngStr] = coordinates.split(',').map(str => str.trim());

        // Extract numerical values and hemispheres (N/S for lat, E/W for lng)
        const lat = parseFloat(latStr.split('°')[0]);
        const lng = parseFloat(lngStr.split('°')[0]);

        const latHemisphere = latStr.includes('S') ? -1 : 1;
        const lngHemisphere = lngStr.includes('W') ? -1 : 1;

        // Return coordinates in numeric form
        return [lat * latHemisphere, lng * lngHemisphere];
    };

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const locdata = await getAllLocations(); // Assuming getAllLocations returns an array of location objects
                const citdata = await getAllCities(); 
                setLocations(locdata);
                setCities(citdata);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching locations:', error);
                setLoading(false);
            }
        };

        fetchMarkers();
    }, []);

    if (loading) {
        return <div>Loading map...</div>;
    }

    // Custom icon and shadow for markers
    const customIcon = new L.Icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        shadowSize: [41, 41],
        shadowAnchor: [12, 41],
    });

    const customRedIcon = new L.Icon({
        iconUrl: 'https://cdn1.iconfinder.com/data/icons/color-bold-style/21/14_2-512.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [60, 80], // Adjusted icon size
        iconAnchor: [30, 100], // Bottom-center of the icon
        shadowSize: [60, 60], // Adjust shadow size as needed
        shadowAnchor: [30, 60], // Align shadow with the base of the icon
    });
    
    
    

    return (
        <div className="map-container" style={{ height: '100%', width: '100%' }}>
            <MapContainer center={[51.0447, -114.0719]} zoom={7} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />

                {cities.map((city) => {
                    // Parse coordinates
                    const [lat, lng] = parseCoordinates(city.Coordinates);
                    return (
                        <Marker
                            key={city.CityID}
                            position={[lat, lng]} // Use parsed latitude and longitude
                            icon={customRedIcon} // Use the custom icon here
                        >
                            <Popup>
                                <div>
                                    <h3>{city.Name}</h3>
                                    <Link to={`/CityPage/${city.CityID}`}>Go to city details</Link>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}         
                {locations.map((location) => {
                    // Parse coordinates
                    const [lat, lng] = parseCoordinates(location.Coordinates);
                    return (
                        <Marker
                            key={location.LocationID}
                            position={[lat, lng]} // Use parsed latitude and longitude
                            icon={customIcon} // Use the custom icon here
                        >
                            <Popup>
                                <div>
                                    <h3>{location.Name}</h3>
                                    <p>{location.Description}</p>
                                    <Link to={`/LocationPage/${location.LocationID}`}>Go to location details</Link>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}


            </MapContainer>
            
            
        </div>
    );
};

export default LocationMap;
