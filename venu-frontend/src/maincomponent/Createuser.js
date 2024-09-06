import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { CreateUsers, UpdateUsers } from '../Services';

function Createuser({props,closemodal}) {

    const fields = {
        name: '',
        age: '',
        password: '',
        email: '',
        number: '',


    }
    useEffect(()=>{
        console.log("props",props);
        
        setFormFields(props)


    },[])

    const [formfields, setFormFields] = useState(fields);
    const { name, email, password, number, age } = formfields;

    const handleChange = async (e) => {
    
        const {name,value} = e.target
        setFormFields((prevState)=>({
            ...prevState,
            [name]:value

        }))
    }
    const saveUsers=async()=>{
        console.log("formfields",formfields);
        
        if(!formfields?._id){
            const Response =await CreateUsers(formfields)
            console.log("Response",Response);
            
            if(Response?.data?._id){
                formfields.id = Response.data._id
                toast.success('User Created Succesfully',{
                    poition:"center",
                    autoClose:3000
                })
            }
        }else{
            const Response =await UpdateUsers(formfields)
            console.log("Response from update",Response);
            
            if(Response?.data?._id){
                formfields.id = Response.data._id
                toast.success('User Updated Succesfully',{
                    poition:"center",
                    autoClose:3000
                })
            }

        }
        closemodal()

    }

    return (
        <>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                >
                    Name
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="name"
                        name="name"
                        className="form-control"
                        value={name} onChange={handleChange} />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                >
                    Email
                </label>
                <div className="col-lg-6">
                    <input component="input"
                        placeholder="email"
                        name="email"
                        className="form-control"
                        value={email} onChange={handleChange} />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                >
                    password
                </label>
                <div className="col-lg-6">
                    <input 
                        placeholder="password"
                        name="password"
                        className="form-control"
                        value={password} onChange={handleChange} />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                >
                    Mobile Number
                </label>
                <div className="col-lg-6">
                    <input
                        placeholder="number"
                        name="number"
                        className="form-control"
                        value={number} onChange={handleChange} />

                </div>
            </div>
            <div className="form-group mb-3 row">
                <label
                    className="col-lg-4 col-form-label"
                >
                    Age
                </label>
                <div className="col-lg-6">
                    <input
                        placeholder="age"
                        name="age"
                        className="form-control"
                        value={age} onChange={handleChange} />

                </div>
            </div>
            <br/>
            <Button variant='success' className='button1' onClick={saveUsers}>Submit</Button>


        </>
    )
}

export default Createuser