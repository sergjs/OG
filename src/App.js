import React from "react";
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import store from './redux/redux-store';
import WorksContainer from "./Components/Works/WorksContainer";

const Viewer = React.lazy(() => import('./Components/Works/Viewer'));

class App extends React.Component {
  render() {
    return (
      <div >
        <Header />
        <Slider />
        <About />
        <WorksContainer />
        <Route path='/Viewer' render={() => {
          return <React.Suspense fallback={<div>Загрузка...</div>}>
            <Viewer />
          </React.Suspense>
        }} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps)(App);

let OGProject = (props) => {
  return <HashRouter basename={process.env.PUBLIC_URL} >
    <React.StrictMode>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </React.StrictMode>
  </HashRouter>
}

export default OGProject;