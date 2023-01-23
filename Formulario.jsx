import React, { useState } from  'react';
    
    
const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { nombre,apellido, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <form onSubmit={ createUser }>
        <div>
            <label>Nombre: </label> 
            <input type="text" onChange={ (e) => setNombre(e.target.value) } />
            </div>
            <div>
                <label>Apellido: </label> 
                <input type="text" onChange={ (e) => setApellido(e.target.value) } />
            </div>
            <div>
                <label> Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirmar Constraseña: </label> 
                <input type="text" onChange={ (e) => setConfirmpassword(e.target.value) } />
            </div>
            <input type="submit" value="Tu informacion de registro" />
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <p>Contraseña: {password}</p>
            <p> Confirmar Constraseña: {confirmpassword}</p>
            </form>
            );
};
    
export default Formulario;
