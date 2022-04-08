import React, { useEffect, useState } from 'react';
import { getAllBranchOffices } from '../services/branchOfficeService';
import { Table, Tag, Space, Button } from 'antd';

const ListBranchOffices = () => {

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

    useEffect(() => {
        getAllBranchOfficesFromService();
    }, [])

    const columns = [
        {
            title: 'Nombre Sucursal',
            dataIndex: 'name',
            key: 'name',
            render: name => <a>{name}</a>,
        },
        {
            title: 'Dirección',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Instructores',
            dataIndex: 'instructors',
            key: 'instructors',
            render: instructors => (
                <>
                    {instructors?.map(instructor => {
                        let color = instructor.length > 5 ? 'geekblue' : 'green';
                        if (instructor === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={instructor}>
                                {instructor?.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Stacks',
            key: 'stacks',
            dataIndex: 'stacks',
            render: stacks => (
                <>
                    {stacks?.map(tag => {
                        let color = tag === 'PYTHON' ? 'geekblue' : 'green';
                        if (tag === 'MERN') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Acciones',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button>Ver {record.name}</Button>
                    <Button>Eliminar</Button>
                </Space>
            ),
        },
    ];

    const dataTable = branchOffices?.map((bo, i) => {
        return {
            key: `${i}`,
            name: bo.name,
            address: bo.address,
            instructors: bo.instructors,
            stacks: bo.stacks
        }
    });


    return (
        <div>
            <Table columns={columns} dataSource={dataTable} className="branch-offices-table" />
        </div>
    )

}

export default ListBranchOffices;