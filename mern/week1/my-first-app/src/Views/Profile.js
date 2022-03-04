import React, { useState } from "react";

const Profile = (props) => {

    const { age } = props;

    const [nameUser, setNameUser] = useState('');
    const [ageUser, setAgeUser] = useState(0);

    const upAge = () => {
        setAgeUser(ageUser + 1);
    }

    const handlernameUser = (e) => {
        console.log("🚀 ~ file: Profile.js ~ line 17 ~ handlernameUser ~ e", e.target.value)
        setNameUser(e.target.value)
    }

    return (
        <div>
            <h1>Hola {nameUser}</h1>
            <h3>Tu edad es: {ageUser}</h3>
            <button onClick={upAge}>Subir edad</button>
            <form action="">
                <input type="text" name="nameUser" value={nameUser} onChange={(e) => handlernameUser(e) } />
            </form>
        </div> 
    )
}

export default Profile;