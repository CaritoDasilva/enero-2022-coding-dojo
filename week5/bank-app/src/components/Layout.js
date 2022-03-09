import React from "react";

const Layout = ({ children }) => {

    return (
        <div>
            <div>
                <h1>Bienvenido al Dojo Bank</h1>
            </div>
            <div className="componentContainer">
                {children}
            </div>
            <footer>
                <h3>Si presentas problemas puedes llamar a Atención al cliente</h3>
            </footer>
        </div>
    )
}

export default Layout;