import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    
    useEffect(() => {
        fetch(`${API_URL}/hello`)
            .then(res => res.text())
            .then(setMessage)
            .catch(err => setMessage("Error: " + err));
    }, [API_URL]);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Total War Army Planner</h1>
            <p>Backend says: {message}</p>
        </div>
    );
}

export default App;
