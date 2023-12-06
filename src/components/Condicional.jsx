import { useState } from "react";

const Condicional = () => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);

    const sendEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Validando o e-mail usando a propriedade validity
        setIsValidEmail(e.target.validity.valid);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (isValidEmail) {
            console.log("E-mail adicionado:", email);
        } else {
            console.log("Por favor, insira um e-mail válido.");
        }
    };

    return (
        <>
            <form>
                <button onClick={handleClick} disabled={!isValidEmail}>
                    Add
                </button>
                <input type="email" onChange={sendEmail} />
                <br />
                E-mail: {email}
                <br />
                Resultado: {isValidEmail ? "Tudo certo!" : "E-mail inválido."}
            </form>
        </>
    );
};

export default Condicional;
