import { ControlsContainer, Btn } from "./FeedbackOptions.styled";


export function FeedbackOptions({ onBtnClick, arrayOfOptions }) {
  return (
    <div>
      <ControlsContainer>
        {arrayOfOptions.map(option => (
          <Btn
            key={option}
            type="button"
            onClick={() => onBtnClick(option)}
          >
            {option}
          </Btn>
        ))}
      </ControlsContainer>
    </div>
  )
}



