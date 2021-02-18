const friendDatabase = {};

class Friend {
    constructor(id, { firstName, lastName, email, gender, contacts}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.contacts = contacts;
    }
}

//const root = { hello: () => "hi! i am sushma"};
const resolvers = { 
    getFriend: ({ id}) => {
       return new Friend(id, friendDatabase)
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }

};

export default resolvers;
