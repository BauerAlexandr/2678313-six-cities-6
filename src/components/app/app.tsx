import {useEffect} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchOffersAction} from '../../store/action';
import {getHasErrorStatus, getOffers, getOffersLoadingStatus} from '../../store/reducer';
import FavoritesPage from '../favorites-page/favorites-page';
import Homepage from '../homepage/homepage';
import LoginPage from '../login-page/login-page';
import NotFound from '../not-found/not-found';
import OfferPage from '../offer-page/offer-page';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const isOffersLoading = useAppSelector(getOffersLoadingStatus);
  const hasError = useAppSelector(getHasErrorStatus);

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (isOffersLoading) {
    return <Spinner />;
  }

  if (hasError) {
    return (
      <p style={{padding: '40px', textAlign: 'center'}}>
        Failed to load offers. Please try again later.
      </p>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<Homepage />} />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorite}
          element={
            <PrivateRoute>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.OfferId} element={<OfferPage offers={offers} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
