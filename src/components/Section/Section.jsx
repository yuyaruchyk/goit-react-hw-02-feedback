
import {Title} from "./Section.styled"

export function Section({ title, children }) {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
}

