import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import {Notification} from './Notification/Notification'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

addFeedback = (prevState)=>{
  this.setState(prevState =>{
    return this.good += 1
  })
}



  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => acc + val, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title={'Please leave feedback'} children>
{this.countTotalFeedback() === 0 ? <Notification message={'There is no feedback'}/> : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />}

        
          
           <FeedbackOptions options={this.state} onLeaveFeedback={this.addFeedback}/>
        </Section>
      </>
    );
  }
}
export default App;
