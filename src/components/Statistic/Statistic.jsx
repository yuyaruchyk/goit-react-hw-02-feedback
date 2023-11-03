import { Stat } from "./Statistic.styled";



export function Statistics({ rates, total, positive }) {

    return (
        <div>
            <div>
                {Object.keys(rates).map(k =>
                    <Stat key={k}>{k}: <span>{rates[k]}</span></Stat>
                )}
                <Stat>Total: <span>{total}</span></Stat>
                <Stat>Positive feedback: <span>{positive}%</span></Stat>
            </div>
        </div>)
}