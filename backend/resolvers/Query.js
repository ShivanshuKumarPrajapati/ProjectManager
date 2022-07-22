exports.Query = {
    
  client: (parent, args, { Client }) => {
    const { id } = args;
    const client = Client.findById(id).then(client => {
      return client;
    })
    return client;
  },
  clients: (parent, args, { Client }) => {

    const clients = Client.find().then((client) => {
      return client;
    });

    return clients
  }, 
  
  project: (parent, args, {Project}) => {
    const { id } = args;
    const project = Project.findById(id).then(project => {
      return project;
    });

    return project;
  },
  projects: (parent, args, {Project}) => {
    const projects = Project.find().then((projects) => {
      return projects;
    }
    );

  return projects;
  },
  
};
