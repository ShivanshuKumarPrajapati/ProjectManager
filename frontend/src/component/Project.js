import React from 'react'
import { useQuery } from '@apollo/client'

import Spinner from './Spinner';
import { GET_PROJECTS } from '../Queries/projectQuery';
import ProjectCard from './ProjectCard';


const Project = () => {

    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <Spinner />;

    if (error) return <p>Something went wrong</p>;
    return (
      <React.Fragment>
        {data.projects.length > 0 ? (
          <div className="row">
                {
                    data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                    ))
                }
          </div>
        ) : (
          <p>No projects found</p>
        )}
      </React.Fragment>
    );
            
}

export default Project