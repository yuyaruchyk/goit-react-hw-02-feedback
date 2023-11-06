import { SecondaryContainer, Btn } from './FeedbackOptions.styled';

export function FeedbackOptions({ onBtnClick, arrayOfOptions }) {
  return (
    <div>
      <SecondaryContainer>
        {arrayOfOptions.map(option => (
          <Btn key={option} type="button" onClick={() => onBtnClick(option)}>
            {option}
          </Btn>
        ))}
      </SecondaryContainer>
    </div>
  );
}
