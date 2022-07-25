import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { FaEnvelope,FaPhone, FaIdBadge } from 'react-icons/fa'


import { GET_PROJECT } from '../Queries/projectQuery'
import Spinner from '../component/Spinner'
import DeleteProject from '../component/DeleteProject'
import EditProject from '../component/EditProject';

const Project = () => {

    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id: id }
    },
    );

    if (loading) return <Spinner />

    if (error) return <p>Something went Wrong</p>

    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto w-75 card p-5">
            <EditProject project={data.project}/>
            <DeleteProject projectId={data.project.id}/>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h5 className="mt-2">Project status:</h5>
            <p>{data.project.status}</p>

            <h5 className="mt-3">Client Information</h5>
            <ul className="list-group">
              <li className="list-group-item">
                <FaIdBadge className="icon" />
                {data.project.client.name}
              </li>
              <li className="list-group-item">
                <FaEnvelope className="icon" />
                {data.project.client.email}
              </li>
              <li className="list-group-item">
                <FaPhone className="icon" />
                {data.project.client.phone}
              </li>
            </ul>
            <Link
              to="/"
              className="btn btn-dark btn-sm w-25 d-inline ms-auto mt-5"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
}


export default Project