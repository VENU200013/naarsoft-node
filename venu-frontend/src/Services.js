import axios from "axios"

export const CreateUsers=async(data)=>{
    return await axios.post('http://localhost:8000/api/v1/user/save',data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const UpdateUsers=async(data)=>{
    console.log(data,"check user id")
    return await axios.put('http://localhost:8000/api/v1/user/update',data,
        {
            headers: {
                'id': data._id 
            }
        }
    )
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const GetUsers=async(data)=>{
    return await axios.get('http://localhost:8000/api/v1/user/get',data)
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const deleteUsers=async(data)=>{
   
    return await axios.delete('http://localhost:8000/api/v1/user/delete',
        {
            headers: {
                'id': data._id 
            }
        }
    )
    .then((res)=>{
        return res.data
    })
    .catch((err)=>{
        console.log(err)
    })
}