import './ball.css';

interface BallProps {
    handleClick: () => void;
    numbers: number[];
}

const Ball: React.FC<BallProps> = ({handleClick, numbers}) => {
    return (
        <div className="num-div">
            <button id="newNumbers" onClick={handleClick} type="button">New numbers</button>
            <div className="ball-numbers">{numbers.map((number, index) => (
                <div className="number" key={index}>{number}</div>
            ))}</div>
        </div>
    );
};
export default Ball;