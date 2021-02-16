import express from 'express';
import schema from "./schema";
import  { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/', (req,res) => {
    res.send('Graphql is amazing!');
});

const FriendDatabase = {};

class Friend {
    constructor(id, { firstName, lastName, email, gender}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender
    }
}

//const root = { hello: () => "hi! i am sushma"};
const root = { 
    friend: () => {
    return {
        "id": 3354534,
        "firstName": "Sohum",
        "lastName": "Gorladku",
        "gender": "female",
        "email":  "test1@gmail.com",               
    }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        FriendDatabase[id] = input;
        return new Friend(id, input);
    }

};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));
