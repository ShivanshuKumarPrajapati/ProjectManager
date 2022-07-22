exports.Query = {
  client: (parent, args, { Client_model }) => {
    const { id } = args;
    const client = Client_model.findById(id).then((client) => {
      return client;
    });
    return client;
  },
  clients: (parent, args, { Client_model }) => {
    const clients = Client_model.find().then((client) => {
      return client;
    });

    return clients;
  },

  project: (parent, args, { Project_model }) => {
    const { id } = args;
    const project = Project_model.findById(id).then((project) => {
      return project;
    });

    return project;
  },
  projects: (parent, args, { Project_model }) => {
    const projects = Project_model.find().then((projects) => {
      return projects;
    });

    return projects;
  },
};
