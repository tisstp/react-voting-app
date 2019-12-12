import React from 'react';


class Results extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent() {
    if (this.store.getState().angular) {
      const angular = this.store.getState().angular;
      return this.handlePercent(angular);
    } else {
      return 0;
    }
  }

  votesReactInPercent() {
    if (this.store.getState().react) {
      const react = this.store.getState().react;
      return this.handlePercent(react);
    } else {
      return 0;
    }
  }

  votesVuejsInPercent() {
    if (this.store.getState().vuejs) {
      const vuejs = this.store.getState().vuejs;
      return this.handlePercent(vuejs);
    } else {
      return 0;
    }
  }

  handlePercent(val) {
    const angular = this.store.getState().angular;
    const react = this.store.getState().react;
    const vuejs = this.store.getState().vuejs;
    return (val / (angular + react + vuejs)) * 100;
  }

  render() {
    const angularPercent = this.votesAngularInPercent().toFixed(2) + '%';
    const reactPercent = this.votesReactInPercent().toFixed(2) + '%';
    const vuejsPercent = this.votesVuejsInPercent().toFixed(2) + '%';
    return (
      <div>
        <span className="badge badge-danger">Angular: {angularPercent}</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: angularPercent}}></div>
        </div>
        <br/>

        <span className="badge badge-info">React: {reactPercent}</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: reactPercent}}></div>
        </div>
        <br/>

        <span className="badge badge-success">Vue.js: {vuejsPercent}</span>
        <div className="progress">
          <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: vuejsPercent}}></div>
        </div>
        <br/>

        <br/>
        <br/>
        <br/>
      </div>
    );
  }

}

export default Results;
