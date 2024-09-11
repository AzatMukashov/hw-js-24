import './App.css'
import {useState, useRef} from "react";
import Ball from './components/ball.tsx';

interface INumber {
    numbers: number[];
}

const App = () => {
    const [num, setNum] = useState<INumber[]>([
        {numbers: [5, 11, 16, 23, 32]}
    ]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        console.log('hi');
        setNum(num);
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };
    return (
        <>
            <Ball numbers={num[0].numbers} handleClick={handleClick}/>
        </>
    )
};

export default App
