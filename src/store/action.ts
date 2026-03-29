import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

export const changeCity = createAction<string>('app/changeCity');

export const fillOffers = createAction<Offer[]>('app/fillOffers');
