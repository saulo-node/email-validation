import { useState } from "react"

const Condicional = () => {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const sendEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)
    }

    const clearEmail = (e) => {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Register your email:</h2>
            <form>
                <input type="email" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={sendEmail}>Send email</button>
                <br />
                {userEmail && (
                    <div>
                        <p>User email is: {userEmail}</p>
                        <button onClick={clearEmail}>Clear email</button>
                    </div>
                )}
            </form>
        </div>
    )

}

export default Condicional;