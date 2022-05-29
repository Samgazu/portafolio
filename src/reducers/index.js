import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { connectRouter } from 'connected-react-router'
import userReducer from './usersReducer';
import { sideReducer } from './sideReducer';
import { searchReducer } from './searchReducer';
import { systemsReducer } from './systemsReducer';
import { newQuoteReducer } from './newQuoteReducer';
import { scheduleSurgeryReducer } from './scheduleSurgeryReducer';
import { allUsersReducer } from './allUsersReducer';
import { scheduleReducer } from './scheduleReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  sidebar: sideReducer,
  search: searchReducer,
  user: userReducer,
  systems: systemsReducer,
  newQuote: newQuoteReducer,
  scheduleSurgery: scheduleSurgeryReducer,
  allUsers: allUsersReducer,
  schedule: scheduleReducer,
});

export default rootReducer;
