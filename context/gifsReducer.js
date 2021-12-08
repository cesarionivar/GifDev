import { types } from '../types/types';

export const gifsInitialState = {
  gifs: [],
  loading: false,
};

export const gifsReducer = (state, action) => {
  switch (action.type) {
    case types.startGetGifs:
      return {
        ...state,
        loading: true,
      };

    case types.setGifs:
      return {
        ...state,
        gifs: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
