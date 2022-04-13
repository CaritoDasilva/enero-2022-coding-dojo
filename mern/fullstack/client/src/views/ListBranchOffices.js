import React, { useEffect, useState } from 'react';
import { deleteOneBranchOffice, getAllBranchOffices } from '../services/branchOfficeService';
// import { Table, Tag, Space, Button } from 'antd';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ListBranchOffices = () => {
    const navigate = useNavigate();
    const [branchOffices, setBranchOffices] = useState([]);
    const [error, setError] = useState('');

    const getAllBranchOfficesFromService = async () => {
        try {
            const branchOfficesFromService = await getAllBranchOffices();
            console.log("🚀 ~ file: ListBranchOffices.js ~ line 12 ~ getAllBranchOfficesFromService ~ branchOfficesFromService", branchOfficesFromService)
            setBranchOffices(branchOfficesFromService.branchOffices);
        } catch(err) {
            setError(err);
        }
    }

    const goToDetailPage = (id) => {
        navigate(`/sucursal/${id}`);
    }

    const deleteBranchOfficeFromService = async (id) => {
        try {
            await deleteOneBranchOffice(id);
            const newBranchOfficeArr = branchOffices.filter(bo => bo._id !== id);
            setBranchOffices(newBranchOfficeArr);
        } catch(err) {
            console.log("🚀 ~ file: ListBranchOffices.js ~ line 32 ~ deleteBranchOfficeFromService ~ err", err)
            
        }
    }

    useEffect(() => {
        getAllBranchOfficesFromService();
    }, [])


    // const columns = [
    //     {
    //         title: 'Nombre Sucursal',
    //         dataIndex: 'name',
    //         key: 'name',
    //         render: name => <a>{name}</a>,
    //     },
    //     {
    //         title: 'Dirección',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    //     {
    //         title: 'Instructores',
    //         dataIndex: 'instructors',
    //         key: 'instructors',
    //         render: instructors => (
    //             <>
    //                 {instructors?.map(instructor => {
    //                     let color = instructor.length > 5 ? 'geekblue' : 'green';
    //                     if (instructor === 'loser') {
    //                         color = 'volcano';
    //                     }
    //                     return (
    //                         <Tag color={color} key={instructor}>
    //                             {instructor?.toUpperCase()}
    //                         </Tag>
    //                     );
    //                 })}
    //             </>
    //         ),
    //     },
    //     {
    //         title: 'Stacks',
    //         key: 'stacks',
    //         dataIndex: 'stacks',
    //         render: stacks => (
    //             <>
    //                 {stacks?.map(tag => {
    //                     let color = tag === 'PYTHON' ? 'geekblue' : 'green';
    //                     if (tag === 'MERN') {
    //                         color = 'volcano';
    //                     }
    //                     return (
    //                         <Tag color={color} key={tag}>
    //                             {tag.toUpperCase()}
    //                         </Tag>
    //                     );
    //                 })}
    //             </>
    //         ),
    //     },
    //     {
    //         title: 'Acciones',
    //         key: 'action',
    //         render: (text, record) => (
    //             <Space size="middle">
    //                 <Button>Ver {record.name}</Button>
    //                 <Button>Eliminar</Button>
    //             </Space>
    //         ),
    //     },
    // ];

    // const dataTable = branchOffices?.map((bo, i) => {
    //     return {
    //         key: `${i}`,
    //         name: bo.name,
    //         address: bo.address,
    //         instructors: bo.instructors,
    //         stacks: bo.stacks
    //     }
    // });


    return (
        <div>
            {/* <Table columns={columns} dataSource={dataTable} className="branch-offices-table" /> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre Sucursal</th>
                        <th>Dirección</th>
                        <th>Instructores</th>
                        <th>Stacks</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {
                        branchOffices?.map(bo => (
                            <tr>
                                <td>{bo.name}</td>
                                <td>{bo.address}</td>
                                <td>{bo.instructors.map(instructor => <p>{instructor}</p>)}</td>
                                <td>{bo.stacks.map(stack => <p>{stack}</p>)}</td>
                                <td>
                                    <Button variant="info" onClick={() => goToDetailPage(bo._id)}>Ver detalle</Button>
                                    <Button variant="dark">Editar</Button>
                                    <Button variant="danger" onClick={() => deleteBranchOfficeFromService(bo._id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                   }
                </tbody>
            </Table>
        </div>
    )

}

export default ListBranchOffices;