import React from 'react';
import Header from './components/header/header.js';
import Main from './components/main/main.js';
import Features from './components/features/features.js';
import Footer from './components/footer/footer.js';
import Calendar from './components/calendar/calendar.js';
import Details from './components/details/details.js';
import FetchData from './service/FetchData.js';

import './style.css';


class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: {},
    rockets: [],

  }

  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
    .then(data =>  {
        this.setState({rockets: data.map(item => item.name)})
      return data
    })
    .then(data => data.find(item => item.name === this.state.rocket))
    .then(rocketFeatures => this.setState({rocketFeatures}))
  }

  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features rocketFeatures={this.state.rocketFeatures}/>
        <Footer />
        {/* <Calendar />
        <Details /> */}
      </>
    )
  }
}

export default App;
