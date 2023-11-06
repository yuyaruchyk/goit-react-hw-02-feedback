import { Stat } from './Statistic.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div>
    <div>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total: {total}</Stat>
      <Stat>Positive feedback: {positiveFeedback}%</Stat>
    </div>
  </div>
);
