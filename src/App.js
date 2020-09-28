import React, { Component } from 'react';
import Netflix from './components/Netflix.js';
import './loading.css';
import WithLoading from './components/WithLoading';


const Loading = Component => {
  return ({ isLoading }) => {
    if (!isLoading) return <Component />;
    return <div class="logo">
              <div class="netflix">
                 <span></span>
                 <span></span>
                 <span></span>
               </div>
               <h3 class="heading">Netflix</h3>
           </div>;
  };
};

const Content = Loading(Netflix);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }),1000);
  }
  render() {
    return (
      <div className="App ">
        <Content isLoading={this.state.loading} />
      </div>
    );
  }
}


export default WithLoading(App);
