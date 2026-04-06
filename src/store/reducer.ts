import {createReducer} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer';
import {changeCity, fetchOffersAction} from './action';

export type State = {
  city: string;
  offers: OfferPreview[];
  isOffersLoading: boolean;
  hasError: boolean;
};

export const initialState: State = {
  city: 'Paris',
  offers: [],
  isOffersLoading: false,
  hasError: false,
};

export const getCity = (state: State): string => state.city;
export const getOffers = (state: State): OfferPreview[] => state.offers;
export const getOffersByCity = (state: State): OfferPreview[] =>
  state.offers.filter((offer) => offer.city === state.city);
export const getOffersLoadingStatus = (state: State): boolean => state.isOffersLoading;
export const getHasErrorStatus = (state: State): boolean => state.hasError;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
      state.hasError = false;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.isOffersLoading = false;
      state.hasError = true;
    });
});

export default reducer;
