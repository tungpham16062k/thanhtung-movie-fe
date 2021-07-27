import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Footer from "./components/Footer";
import Header from "./components/Header";
import './assets/font/themify-icons/themify-icons.css'
import './assets/font/fontawesome/css/all.min.css'
import './assets/css/reset.css'
import './assets/css/grid.css'
import './App.scss';
import Login from "./features/User/pages/Login";
import Signup from "./features/User/pages/Signup";
import Movie from "./features/Movie";
import Person from "./features/Person";
import ScrollToTop from './config/scrollToTop';
import Favorite from './features/Movie/pages/Favorite';
import NotFound from './pages/NotFound';
import Profile from './features/User/pages/Profile';
import Search from './features/Movie/pages/Search';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={store}>
          <ScrollToTop />
          <Header />
          <Switch>
            <Redirect exact from="/" to="/movie" />
            <Route path='/movie' component={Movie} />
            <Route path='/person' component={Person} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
            <Route path='/sign-up' component={Signup} />
            <Route path='/search' component={Search} />
            <Route path='/favorites' component={Favorite} />
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
          </Switch>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
