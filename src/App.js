import React from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <div>
        <div className="jumbotron" style={{textAlign: 'center'}}>
          <img src="images/redux_logo.png" height="96" alt="logo"/>
          <h2>What is your favorite front-end framework in 2019?</h2>
          <h4>Click on the logos below to vote!</h4>
          <br/>
          <div className="row">
            <div className="offset-3 col-2">
              <img src="images/angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular}/>
            </div>
            <div className="col-2">
              <img src="images/react_logo.png" height="96" alt="React" onClick={this.handleVoteReact}/>
            </div>
            <div className="col-2">
              <img src="images/vuejs_logo.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
