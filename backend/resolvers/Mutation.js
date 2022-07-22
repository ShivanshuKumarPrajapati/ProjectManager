exports.Mutation = {
  addClient: (parent, { input }, { Client }) => {
    
    const { name, email, phone } = input;

    const client = new Client({
      name: name,
      email: email,
      phone: phone,
    });

    return client.save();
  },

  deleteClient: (parent, { id }, { Client }) => {
    
   const mssg =  Client.findByIdAndDelete(id)
      .then(() => {
        return "client deleted successfully";
      })
      .catch(err => {
        return "Unable to delete client";
    })
    
  return mssg;
  }

};
