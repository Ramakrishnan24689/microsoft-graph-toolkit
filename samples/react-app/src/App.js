import React, { Component } from 'react';
import { Login, Agenda, Person, PeoplePicker } from '@microsoft/mgt-react';
import { PersonViewType } from '@microsoft/mgt';

class App extends Component {
  render() {
    const personDetails = {
      displayName: 'Nikola Metulev'
    };

    return (
      <div className="App">
        <Login loginCompleted={() => console.log('login completed')} />
        <Agenda groupByDay="true" />
        <PeoplePicker />
        <Person personDetails={personDetails} view={PersonViewType.oneline} />
      </div>
    );
  }
}

export default App;
