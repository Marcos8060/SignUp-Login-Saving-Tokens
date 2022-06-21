import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/profile/";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    profession: "",
    county: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        firstname: formData.firstname,
        lastname: formData.lastname,
        profession: formData.profession,
        county: formData.county,
      })
      .then((res) => {
        setFormData({
          firstname: "",
          lastname: "",
          profession: "",
          county: "",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProfile(data);
    };
    fetchProfiles();
  }, [profile]);


  const deleteProfile = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/profile/${id}/`).catch((err) => {
      console.log(err.response.status);
    });
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="firstname" className="form-label">
          FirstName
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="firstname"
          name="firstname"
          onChange={handleChange}
        />
        <label htmlFor="lastname" className="form-label">
          LastName
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="lastname"
          name="lastname"
          onChange={handleChange}
        />
        <label htmlFor="profession" className="form-label">
          Profession
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="profession"
          name="profession"
          onChange={handleChange}
        />
        <label htmlFor="county" className="form-label">
          County
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="county"
          name="county"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {profile.length > 0 ? (
        <>
          <hr />
          <table>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Profession</th>
            <th>County</th>
            {profile.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.profession}</td>
                  <td>{data.county}</td>
                  <td>
                    <button
                      onClick={() => deleteProfile(data.id)}
                      className="btn btn-sm btn-primary"
                    >
                      delete
                    </button>
                    <Link to={`/edit/${data.id}`} className='btn btn-sm btn-primary m-2'>Edit</Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
