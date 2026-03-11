import { Link } from 'react-router-dom';

function NotFound(): JSX.Element{
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <h1>404. Page not found</h1>
          <Link to="/" style={{color: '#0097e6'}}>Вернуться на главную</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
