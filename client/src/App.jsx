import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = async () => {
        try {
            const COUNT_API =
                import.meta.env.VITE_ENV === "production"
                    ? import.meta.env.VITE_PROD_COUNT
                    : import.meta.env.VITE_DEV_COUNT;
            console.log(COUNT_API);
            const resp = await axios.get(COUNT_API);
            setCount(resp.data.count);
        } catch (e) {
            setCount(1);
        }
    };
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick}>count is {count}</button>
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
