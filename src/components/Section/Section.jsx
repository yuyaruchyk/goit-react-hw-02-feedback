
import {Title} from "./Section.styled"

export function Section({ title, children }) {
    return (
        <Section>
            <Title>{title}</Title>
            {children}
        </Section>
    )
}

