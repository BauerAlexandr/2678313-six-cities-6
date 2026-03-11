import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Homepage from '../homepage/homepage';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import OfferPage from '../offer-page/offer-page';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import NotFound from '../not-found/not-found';

type AppProps = {
  offersCount: number;
};

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<Homepage offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorite}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.OfferId} element={<OfferPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
