import React, { useState } from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function MyBottomNavigation() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Accueil" icon={<HomeIcon />} />
      <BottomNavigationAction label="Recherche" icon={<SearchIcon />} />
      <BottomNavigationAction label="Favoris" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Localisation" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default MyBottomNavigation;
