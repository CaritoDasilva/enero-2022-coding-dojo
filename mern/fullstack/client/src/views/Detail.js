import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { getOneBranchOffice } from "../services/branchOfficeService";


const Detail = () => {

    const { id } = useParams();
    const [branchOffice, setBranchOffice] = useState();

    const getOneBranchOfficeFromService = async () => {
        try {
            const response = await getOneBranchOffice(id)
            console.log("🚀 ~ file: Detail.js ~ line 14 ~ getOneBranchOfficeFromService ~ response", response)
            setBranchOffice(response.branchOffices);
        } catch(err) {
            console.log(err);
        }

    }

    useEffect(() => {
        id && getOneBranchOfficeFromService();
    }, [id])

    return (
        <div>
            <Link to={"/"}>VOLVER</Link>
            <div className="cardDetail">
                <h1>{branchOffice?.name}</h1>
                <h3>{branchOffice?.address}</h3>
            </div>
        </div>
    )

}

export default Detail;