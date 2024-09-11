import './App.css'
import {useState} from "react";
import Ball from './components/ball.tsx';

interface INumber {
    numbers: number[];
}

const App = () => {
    const [num, setNum] = useState<INumber[]>([
        {numbers: [5, 11, 16, 23, 32]}
    ]);
    const handleClick = () => {
        const newNumbers = generateRandomNumbers();
        setNum([{numbers: newNumbers}]);
    };
    return (
        <>
            <Ball numbers={num[0].numbers} handleClick={handleClick}/>
        </>
    )
};
const generateRandomNumbers = (): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < 5) {
        const randomNum = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
        numbers.add(randomNum);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};
export default App