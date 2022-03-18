import React from "react";

const ListAccounts = ({ accounts }) => {

    return (
        <div>
            <h1>Lista de Usuarios con cuentas</h1>
            {accounts?.map(account => {
                return(
                    <h1>{account?.name}</h1>
                )
            })}
        </div>
    )

}

export default ListAccounts;