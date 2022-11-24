import { Component } from 'react';

import { Section } from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'} />
      </>
    );
  }
}
export default App;
