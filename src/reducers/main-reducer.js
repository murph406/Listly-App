import React from 'react';
import { combineReducers } from 'redux';

import user from './user-reducer';

const MainReducer = combineReducers({
    user
});

export default MainReducer;