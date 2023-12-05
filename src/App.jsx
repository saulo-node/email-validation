import { useState } from "react";

const App = () => {

    const [name, setName] = useState('');

    const handleClick = () => {
        console.log('Este é o seu nome:', name)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        
        <div>
            <h1>Digite seu nome abaixo:</h1>
            <button onClick={handleClick}>Add</button>
            <input type="text" onChange={handleChange} />
            <br/>
            Nome digitado: {name}
        </div>
    )
}

export default App;