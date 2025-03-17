import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';



const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Banff Town',
    description: 'One of the most beautiful towns in the world!',
    imageUrl:
      'https://c8.alamy.com/comp/DHJ3W8/people-strolling-down-banff-avenue-banff-town-and-cascade-mountain-DHJ3W8.jpg',
    address: '110 Bear Street, Banff, AB, T1L 1A1',
    location: {
      lat:  51.1784,
      lng: 115.5708
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://thebanffblog.com/wp-content/uploads/2020/12/Town-of-Banff_The-Banff-Blog-1024x683.jpg',
    address: '110 Bear Street, Banff, AB, T1L 1A1',
    location: {
      lat: 51.1784,
      lng:115.5708
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
