import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { USERS_NAVIGATION_DATA } from '@app/utils/utils';
import { MainIcons } from '@app/components/Icons';

const Main = () => {
  return (
    <div id="user-data-container" className="w-full flex items-center justify-center flex-row flex-grow space-x-6 h-full">
      {
        USERS_NAVIGATION_DATA.map(user => <UserDataCard path={user.path} state={user.state} key={user.state.id}/>)
      }
    </div>
  );
}

export default Main;


const UserDataCard = ({ path, state }) => {
  return (
    <Link to={path}>
      <div id="card-wrapper" className="transition-all duration-500 flex items-start py-10 px-5 justify-center h-64 w-96 rounded border-2 bg-white hover:bg-purple-100 border-none">
        <div id="center-content-wrapper" className="flex flex-col items-center justify-center space-y-6">
          <MainIcons iconType={state.name} size="64px" />
          <div id="caption" className="flex flex-col items-center justify-center font-caption">
            <h4 id="card-title" className="text-lg font-semibold text-gray-800">{state.textContent}</h4>
            <p id="card-description" className="text-sm font-normal text-center">{state.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}