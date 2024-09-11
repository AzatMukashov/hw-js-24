import './ball.css';
import {forwardRef} from "react";

interface BallProps {
    handleClick: () => void;
    numbers: number[];
}

const Ball = forwardRef<HTMLButtonElement, BallProps>(({handleClick, numbers}, ref) => {
    return (
        <div className="num-div">
            <button id="newNumbers" ref={ref} onClick={handleClick} type="button">New numbers</button>
            <div className="ball-numbers">{numbers.map((number, index) => (
                <div className="number" key={index}>{number}</div>
            ))}</div>
        </div>
    );
});

export default Ball;