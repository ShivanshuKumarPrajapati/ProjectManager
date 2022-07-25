import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

import { GET_PROJECTS } from '../Queries/projectQuery'
import { DELETE_PROJECT } from '../Mutation/projectMutation'

const DeleteProject = ({ projectId }) => {
    
    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectId },
        onError: function (err) {
            console.log(err)
        },
        onCompleted: function () {
            console.log('Project deleted successfully');
            navigate('/');
        },
        refetchQueries: [{ query: GET_PROJECTS }],
    });

  return (
      <div className="d-flex mb-5 ms-auto">
          <button className="btn btn-danger m-2" onClick={deleteProject}>
          <FaTrash className="icon" /> Delete Project
          </button>
      </div>
  )
}

export default DeleteProject