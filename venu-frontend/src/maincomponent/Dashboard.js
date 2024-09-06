import React, { useEffect, useState } from 'react'
import "./home.css"
import { Button, Card, Col, Dropdown, Modal, Table } from 'react-bootstrap'
import { CiCirclePlus } from "react-icons/ci";
import Createuser from './Createuser';
import { GetUsers,deleteUsers } from '../Services';
import { ToastContainer } from 'react-toastify';


function Dashboard() {
    const [createModal, setCreateModal] = useState(false)
    const [item,setItem]=useState({})
    const [data,setData]=useState([])
    const svg1 = (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                <circle fill="#000000" cx="19" cy="12" r="2"></circle>
            </g>
        </svg>
    );
    useEffect(() => {
        getUsers()
    }, [])

    const openModal = async () => {
        setItem({})
        setCreateModal(true)
    }
    const closemodal = async () => {
        setCreateModal(false)
        getUsers()

    }
    const getUsers = async () => {

        const Response = await GetUsers()
        setData(Response.data)
        console.log("Response", Response.data);

    }
    const updateData=async (item) => {
        console.log("item",item);
        setItem(item)
        setCreateModal(true)

    }
    const deleteData=async (item) => {

       const del= await deleteUsers(item);
       getUsers()
    }
    return (
        <>

            {/* <h3>Dashboard Home</h3> */}
            <Col lg={12} >
                <Card className='main-div'>
                    <Card.Header>
                        <Card.Title className='users-style'>Users
                            <Button variant="success"
                                onClick={openModal}>
                                <CiCirclePlus />Add

                            </Button>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table responsive>
                            <thead>
                                <tr>

                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Mobile Number
                                    </th>
                                    <th>
                                       Age
                                    </th>

                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(item => (
                                    <tr>
                                        <td>
                                            <strong>{item.name}</strong>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.number}</td>
                                        <td>{item.age}</td>
                                        <td></td>

                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="success"
                                                    className="light sharp i-false"
                                                >
                                                    {svg1}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => updateData(item)}>

                                                        Update

                                                    </Dropdown.Item >

                                                    <Dropdown.Item onClick={() => deleteData(item)}>

                                                        Delete

                                                    </Dropdown.Item >



                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>

                    </Card.Body>
                </Card>

            </Col>

            <Modal show={createModal} size="lg" onHide={closemodal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                            <div className="modal-header">

                                <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <Createuser props={item} closemodal={closemodal} />


                            </div>

                        </form>

                    </div>
                </div>
            </Modal>


            <ToastContainer/>
        </>
    )
}

export default Dashboard