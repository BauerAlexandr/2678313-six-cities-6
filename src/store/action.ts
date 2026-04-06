import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {adaptOfferPreviewToClient} from '../api';
import {APIRoute} from '../const';
import {OfferPreview, OfferPreviewResponse} from '../types/offer';

type ThunkApiConfig = {
  extra: AxiosInstance;
};

export const changeCity = createAction<string>('app/changeCity');

export const fetchOffersAction = createAsyncThunk<OfferPreview[], undefined, ThunkApiConfig>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreviewResponse[]>(APIRoute.Offers);

    return data.map(adaptOfferPreviewToClient);
  }
);
