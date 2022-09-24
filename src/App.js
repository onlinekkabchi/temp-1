import Collection from "./component/collection";

function App() {
    const appstyle = {
        width: "100%",
        height: "100%",
        display: "flexbox",
        justifyContent: "center",
        padding: "25px",
    };

    return (
        <div style={appstyle} className="App">
            <header className="App-header">
                <Collection />
            </header>
        </div>
    );
}

export default App;
