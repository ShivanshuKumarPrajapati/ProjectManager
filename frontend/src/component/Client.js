import React from 'react';
import {useQuery} from '@apollo/client'

import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../Queries/clientQuery';
import Spinner from './Spinner';

const Client = () => {

    const { loading, error, data } = useQuery(GET_CLIENTS);


    if (loading) return <p><Spinner/></p>
    
    if (error) {
        return <p>something went wrong</p>
    }
    
  return (
      <React.Fragment>
          {!loading && !error && (
              <table className="table table-hover mt-3">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                  </thead>
                  <tbody>
                      {data.clients.map(client => (
                      <ClientRow key={client.id} client={client}/>
                  ))}
                  </tbody>
              </table>
          ) }
      </React.Fragment>
  )
}

export default Client