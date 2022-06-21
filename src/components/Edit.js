import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams();
    const history = useNavigate();
    const [formData,setFormData] = useState({
        firstname: '',
        lastname: '',
        profession: '',
        county: ''
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    useEffect(() =>{
      axios.get(`http://127.0.0.1:8000/api/edit/${id}/`)
      .then((res)=>{
        setFormData({
          ...formData,
          firstname : res.data.firstname,
          lastname : res.data.lastname,
          profession : res.data.profession,
          county : res.data.county
        });
        console.log(res.data);
      })
    },[setFormData])

    
    const handleEdit = (e)=>{
      e.preventDefault();

    axios.put(`http://127.0.0.1:8000/api/edit/${id}/`,{
      firstname: formData.firstname,
      lastname: formData.lastname,
      profession: formData.profession,
      county: formData.county
    })
    .then((res)=>{
      console.log(res.data);
      history('/profile')
    })
    .catch((err) =>{
      console.log(err.response.status);
    })
    }

    
  return (
    <div className='container'>
        <form>
            <input
              name='firstname'
              type="text" 
              className="form-control m-3" 
              onChange={handleChange} 
              value={formData.firstname}
              />
            <input 
              name='lastname'
              type="text" 
              className="form-control m-3"
              onChange={handleChange} 
              value={formData.lastname}
               />
            <input 
              name='profession'
              type="text" 
              className="form-control m-3" 
              onChange={handleChange} 
              value={formData.profession}
              />
            <input 
              name='county'
              type="text" 
              className="form-control m-3"
              onChange={handleChange} 
              value = {formData.county}
               />
            <button onClick={handleEdit} className="btn btn-primary m-3">Edit Profile</button>
        </form>
    </div>
  )
}

export default Edit