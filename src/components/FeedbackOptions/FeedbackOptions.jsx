import { Container, Btn } from "./FeedbackOptions.styled";

export function FeedbackOptions({ onBtnClick, arrayOfOptions }) {
  return (
    <div>
      <Container>
        {arrayOfOptions.map(option => (
          <Btn
            key={option}
            type="button"
            onClick={() => onBtnClick(option)}
          >
            {option}
          </Btn>
        ))}
      </Container>
    </div>
  )
}

