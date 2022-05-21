
import React, { useEffect, useState } from 'react';

import { HomeScreen } from '../pages/home/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';

import { ATQ_Menu_Page } from '../pages/ATQ/ATQ_Menu_Page';
import { ATQAdmin_Home } from '../pages/ATQAdministrator/ATQ_Home/ATQAdmin_Home';
import { Messenger_Menu_Page } from '../pages/Messenger/Messenger_Menu_Page';
import { Quality_Manager_Page } from '../pages/QualityManager/Quality_Manager_Page';
import  {StoreHouseMenuScreen}  from '../pages/StoreHouseScreen/StoreHouseMenu/StoreHouseMenuScreen';








const HomePage = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.identity);
  const handleUserRole = { 
      '11': <ATQAdmin_Home/>,
       '5': <ATQ_Menu_Page/>,
       '1': <HomeScreen/>,
       '6': <HomeScreen/>,
      '13': <StoreHouseMenuScreen/>,
      '12': <Messenger_Menu_Page/>,
      '16': <Quality_Manager_Page/>,
      '17':'Mantenimiento',
  };
  return (
    <>
    {
      handleUserRole[user.roleID.toString()] 
      ? handleUserRole[user.roleID.toString()]
      :<HomeScreen/>
    }
    </>
  );
};

export default HomePage;
