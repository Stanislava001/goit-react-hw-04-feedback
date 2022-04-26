import { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components//Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const onIncrement = option => {
    switch (option) {
      case 'good':
        setGood(options.good + 1);
        break;

      case 'neutral':
        setNeutral(options.neutral + 1);
        break;

      case 'bad':
        setBad(options.bad + 1);
        break;
      default:
        return;
    }
  };

  function countTotalFeedback() {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const { good } = options;

    return Math.ceil((good * 100) / countTotalFeedback());
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onIncrement}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </div>
  );
}

// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const countPositiveFeedbackPercantage =
//     this.countPositiveFeedbackPercentage();
