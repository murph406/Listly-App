import React from 'react';
import { combineReducers } from 'redux';

import user from './user-reducer';
import selectedData from './selected-data-reducer';

const MainReducer = combineReducers({
    user, 
    selectedData
});

export default MainReducer;