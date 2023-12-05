const { useState } = require("react")

const App = () => {

    const [name, setName] = useState('')

    const handleClick = () => {
        console.log(name)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <p>Type name:</p>
            <button onClick={handleClick}>Add</button>
            <input type="text" onChange={handleChange} />
            <br />
            Name: {name}
        </>
    )
}

export default App;