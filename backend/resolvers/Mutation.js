exports.Mutation = {
  addClient: (parent, { input }, { Client_model }) => {
    const { name, email, phone } = input;

    const client = new Client_model({
      name: name,
      email: email,
      phone: phone,
    });

    return client.save();
  },

  deleteClient: (parent, { id }, { Client_model,Project_model }) => {
    const client = Client_model.findByIdAndDelete(id)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        return "Unable to delete client";
      });

    Project_model.find({ clientId: id }, (err, project) => {
      if (err) {
        return "Unable to delete client's project";
      }
      else {
        
        project.forEach((project) => {
          project.deleteOne();
        }
        );

      }
    })
    
    
    return client;
  },

  addProject: (parent, { input }, { Project_model }) => {
    const { name, description, clientId } = input;

    let status = "Not started";

    if (input.status === "progress") status = "In progress";
    else if (input.status === "completed") status = "Completed";

    const project = new Project_model({
      name: name,
      description: description,
      clientId: clientId,
      status: status,
    });

    return project.save();
  },

  deleteProject: (parent, { id }, { Project_model }) => {
    const project = Project_model.findByIdAndDelete(id)
      .then((project) => {
        return project;
      })
      .catch((err) => {
        return "Unable to delete project";
      });

    return project;
  },

  updateProject: (parent, { id, input }, { Project_model }) => {

    let status = "Not started";

    if (input.status === "progress") status = "In progress";
    else if (input.status === "completed") status = "Completed";

    input.status = status;
    
    const project = Project_model.findByIdAndUpdate(
      id,
      { $set: input },
      { new: true, useFindAndModify: false }
    ).then((project) => {
      return project;
    });

    return project;
  },
};
