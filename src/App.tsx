import "./App.css";
import { useState } from "react";

function App() {
    return (
        <>
        <LinkButton />
        </>
    );
}
export default App;

function LinkButton(){
    const [count, setCount ] = useState(999);
    const handleClick = () => {
        setCount(count + 1);
    }
    return <span className="LinkButtonCss" onClick={handleClick}>
    ♥{count}
    </span>;
}
