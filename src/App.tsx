import "./App.css";

function App() {
    return (
        <>
        <LinkButton />
        </>
    );
}
export default App;


function LinkButton(){
    const count = 999;
    return <span className="LinkButtonCss">♥{count}</span>;
}
