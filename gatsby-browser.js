import ReactGA from 'react-ga';
ReactGA.initialize('UA-39749161-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};