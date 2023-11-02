import React, { Component } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { Notification } from "./Notification message/Notification message";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = newState => {
    this.setState({
      ...newState,
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((prev, nmbr) => prev + nmbr);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = Math.floor((this.state.good * 100) / total);
    return positive;
  };

  render() {
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onBtnClick={this.updateState} 
            arrayOfOptions={Object.keys(this.state)}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistic
              rates={this.state} 
              total={total}
              positive={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

export default App;


