exports.Project = {
    client:(parent,args,{Client_model}) => {
        const id = parent.clientId;

        const client = Client_model.findById(id).then(client => {
            return client;
        });

        return client;
    }
}