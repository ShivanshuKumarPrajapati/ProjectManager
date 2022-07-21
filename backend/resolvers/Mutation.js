const Client = require("./../models/Client");
const Project = require("./../models/Project");

exports.Mutation = {
  addClient: (parent, { input }, context) => {
    console.log(input);

    const { name, email, phone } = input;

    const client = new Client({
      name: name,
      email: email,
      phone: phone,
    });

    console.log(client);
    return client.save();
  },
};
