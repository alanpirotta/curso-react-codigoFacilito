import React, { useState } from "react";
import MainInfo from "./MainInfo";
import Skills from "./Skills";

export const FormContext = React.createContext();

export default (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [skills, setSkills] = useState("");
    return (
        <form>
            <FormContext.Provider value={{email, password, skills, setEmail, setPassword, setSkills}}>
                <MainInfo />
                <Skills />
            </FormContext.Provider>
                <div>
                    <p>Email: {email}</p>
                    <p>Contraseña: {password}</p>
                    <p>Lenguajes: {skills}</p>
                </div>

        </form>
    )
}