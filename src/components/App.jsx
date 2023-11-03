import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Statistics } from './Statistic/Statistic';

import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

import { Container } from './App.styled';

export class App extends React.Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = actionType => {
    this.setState(prevState => ({
      [actionType]: prevState[actionType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positive = Math.floor(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return positive;
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBtnClick={this.onBtnClick}
            arrayOfOptions={Object.keys(this.state)}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              rates={this.state}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}

export default App;
