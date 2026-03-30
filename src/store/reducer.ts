import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, fillOffers} from './action';

export type State = {
  city: string;
  offers: Offer[];
};

export const initialState: State = {
  city: 'Paris',
  offers: [],
};

export const getCity = (state: State): string => state.city;

export const getOffersByCity = (state: State): Offer[] =>
  state.offers.filter((offer) => offer.city === state.city);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
