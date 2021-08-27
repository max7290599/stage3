import { FC, Suspense } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Home from './page/home';
import About from './page/about';
import ErrorPage from './page/error-page';
import Details from './page/details';

import './styles.css';

const App: FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade" key={location.key} unmountOnExit>
            <Switch location={location}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about" component={About} />
              <Route path="/details/:id" component={Details} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Suspense>
    </>
  );
};

export default App;
