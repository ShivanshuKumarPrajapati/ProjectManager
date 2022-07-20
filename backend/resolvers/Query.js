//mongoose model
const Client  = require('./../models/Client');
const Project = require('./../models/Project');
  
    
exports.Query = {
  client: (parent, args, context) => {
    const { id } = args;
    return Client.findById(id);
  },
  clients: (parent, args, context) => {
    return Client.find();
  },
  project: (parent, args, context) => {
    const { id } = args;
    return Project.findById(id);
  },
  projects: (parent, args, context) => {
    return Project.find();
    },
    Project: {
        client: (parent, args, context) => {
            const { id } = parent.clientId;
            return Client.findById(id)
      }
  }
};
