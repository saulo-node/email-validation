const App = () => {

    const tafkid = () => {
        let pet = 'petting'
        if (pet === 'petting') {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <p>Pet:</p>
            It was petted: {tafkid().toString()}
        </>
    )
}

export default App;