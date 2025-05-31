import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [input, setInput] = useState("");

    function handleJoin() {
        if (input === "") {
            alert("Please enter a room ID.");
            return;
        }
        navigate(`/room/${input}`); // Use backticks here for template literal
    }

    return (
        <div id='home'>
            <input
                type="text"
                placeholder='Create room ID'
                value={input}
                onChange={(e) => setInput(e.target.value)} required
            />
            <button onClick={handleJoin}>Create Now</button>
        </div>
    );
}

export default Home;
