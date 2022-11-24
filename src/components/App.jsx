import { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 10,
    neutral: 10,
    bad: 10,
  };

  countTotalFeedback = () => {
    return this.setState( parseInt(this.good + this.neutral + this.bad));
  };

  countPositiveFeedbackPercentage = () => {
   return this.setState(parseInt(this.good / this.countTotalFeedback * 100))
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'} children>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
          <Notification message={'There is no feedback'} />
        </Section>
      </>
    );
  }
}
export default App;
