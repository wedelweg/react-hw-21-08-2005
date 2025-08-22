import { useState } from "react";

function Greeting() {
    const [name, setName] = useState("");
    const [greet, setGreet] = useState("");

    const handleClick = () => {
        if (name != ""){
            setGreet(`Hello, ${name}!`);
        }
        else{
            setGreet("You didn't introduce yourself, so please enter your name");
        }
    };

    return (
        <div>
            <h2>Enter your name:</h2>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleClick}>Greet</button>
            <p>{greet}</p>
        </div>
    );
}

export default Greeting;
