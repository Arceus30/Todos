import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
        try {
            setLoading(true);
            console.log(import.meta.env.VITE_URL + import.meta.env.VITE_COUNT);
            const resp = await axios.get(
                import.meta.env.VITE_URL + import.meta.env.VITE_COUNT
            );
            setCount(resp.data.count);
            setLoading(false);
        } catch (e) {
            setCount(1);
        }
    };
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick} disabled={loading}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default App;
