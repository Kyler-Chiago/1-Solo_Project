// import actionType constants
import * as types from '../constants/actionTypes';

export const addCharacterActionCreator = marketId => ({
  type: types.ADD_CHARACTER,
  payload: characterId,
});

// add more action creators

// export const addMarketActionCreator = location => ({
//   type: types.ADD_MARKET,
//   payload: location,
// });

export const deleteCharacterActionCreator = marketId => ({
  type: types.DELETE_CARD,
  payload: characterId,
});

// This one probably not needed if we set the location in add_Market
// export const addNewLocationActionCreator = newValue => ({
//   type: types.SET_NEW_LOCATION,
//   payload: newValue,
// });